import Pages from "@/Components/products/Pages";
import ProductsCard from "@/Components/products/ProductsCard";
import { SkeletonProducts } from "@/Components/products/SkeletonProducts";
import UnavailableProducts from "@/Components/products/UnavailableProducts";
import { axiosInstance } from "@/lib/axios";
import { useAddedProductStore } from "@/stores/useAddedProductStore";
import {
  productsAndTotalSchema,
  type ProductsAndTotalSchema,
} from "@/validations/schemas";
import { Suspense, useEffect } from "react";
import {
  Await,
  useLoaderData,
  useSearchParams,
  type LoaderFunctionArgs,
} from "react-router-dom";

export const loader = ({ request, params }: LoaderFunctionArgs) => {
  //Número da página
  const { pageNumber } = params;
  console.log(pageNumber);

  //Query de busca
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  console.log("query:", q);

  const productsPromise = axiosInstance
    .get(`/products?q=${q || ""}&page=${pageNumber || "10"}`, {
      signal: request.signal,
    })
    .then((res) => {
      console.log(res);
      const { success, data } = productsAndTotalSchema.safeParse(res);

      if (!success) {
        console.log("Falha na verificação dos produtos!");
        return false;
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });

  return { products: productsPromise };
};

export const Component = () => {
  const { products } = useLoaderData() as {
    products: Promise<ProductsAndTotalSchema>;
  };
  const { setAddedProduct } = useAddedProductStore();

  //Limpa o state com o produto que foi adicionado ao carrinho
  useEffect(() => {
    return () => setAddedProduct(null);
  }, [setAddedProduct]);

  //Como existem componentes que dependem da query de busca, é necessário obtê-la aqui também, já que essa rota serve tanto para a listagem de produtos quanto para os resultados de busca
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  return (
    <div>
      {/* Título da página para produtos */}
      {!q && (
        <h1 className="my-8 text-base xl:text-xl">
          Conheça os nossos produtos!
        </h1>
      )}
      {/* Título da página para pesquisas */}
      {q && (
        <div className="px-8">
          <h1 className="my-8 text-base text-center xl:text-xl">
            Resultados da pesquisa
          </h1>
          <p className="text-left text-base">Termo buscado: "{q}"</p>
        </div>
      )}

      {/* O Suspense suspende a renderização desta parte do componente até que a requisição 
      seja completada e a Promise resolvida. Enquanto isso, ele renderiza o fallback 
      (Skeleton, que é a representação visual de carregamento).
  
      O Suspense só aceita Promises, e o componente <Await> é o responsável por 
      aguardar a resolução delas e entregar os dados prontos.
       */}
      <Suspense fallback={<SkeletonProducts />}>
        <Await resolve={products}>
          {(resolvedProducts) => (
            <>
              {/* Card dos produtos */}
              {resolvedProducts.products.length > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10 px-8">
                  {resolvedProducts.products.map((product) => (
                    <ProductsCard
                      product={product}
                      imgWidth="w-4/6"
                      key={product.id}
                    />
                  ))}
                </div>
              )}
              {/* Componente de produtos indisponíveis */}
              {!resolvedProducts.products && <UnavailableProducts />}
              {/* Mensagem de produtos não encontrados */}
              {resolvedProducts.products.length === 0 && (
                <p className="text-base text-(--secondary-color) font-bold my-10 px-4">
                  Nenhum produto foi encontrado! Por favor utilize outra palavra
                  e tente novamente.
                </p>
              )}
              {/* Página dos produtos */}
              <div className="flex gap-8 items-center justify-center my-15">
                {resolvedProducts.totalPages > 1 && (
                  <Pages
                    url="/products/page/"
                    total={resolvedProducts.totalPages}
                  />
                )}
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
