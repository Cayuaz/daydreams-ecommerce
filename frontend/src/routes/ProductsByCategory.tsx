import ProductsCard from "@/Components/products/ProductsCard";
import { SkeletonProducts } from "@/Components/products/SkeletonProducts";
import UnavailableProducts from "@/Components/products/UnavailableProducts";
import Pages from "@/Components/products/Pages";
import { axiosInstance } from "@/lib/axios";
import {
  productsAndTotalSchema,
  type ProductsAndTotalSchema,
} from "@/validations/schemas";
import { Suspense } from "react";
import {
  Await,
  redirect,
  useLoaderData,
  useParams,
  type LoaderFunctionArgs,
} from "react-router-dom";
import { getCategoryTitle } from "@/lib/utils";

export const loader = ({ params, request }: LoaderFunctionArgs) => {
  const categoryName = params.categoryName;
  const pageNumber = params.pageNumber;

  if (!categoryName) return redirect("/");

  const productsPromise = axiosInstance(
    `/products?q=${categoryName}&page=${pageNumber || 1}`,
    { signal: request.signal },
  )
    .then((res) => {
      const { success, data } = productsAndTotalSchema.safeParse(res);
      if (!success) {
        console.log("Falha na verificação dos produtos por categoria!");
        return [];
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });

  return { products: productsPromise };
};

export const Component = () => {
  const { products } = useLoaderData() as {
    products: Promise<ProductsAndTotalSchema>;
  };

  const categoryName = useParams().categoryName as string;

  return (
    <div>
      {/* Título da categoria */}
      <h1 className="my-8 text-base xl:text-xl">
        {getCategoryTitle(categoryName)}
      </h1>
      <Suspense fallback={<SkeletonProducts />}>
        <Await resolve={products}>
          {(resolvedProducts) => (
            <>
              {/* Card dos produtos */}
              {resolvedProducts.products.length > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10 px-8">
                  {" "}
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
              {resolvedProducts.products.length === 0 && (
                <UnavailableProducts />
              )}
              {/*Páginas dos produtos */}
              {resolvedProducts.totalPages > 1 && (
                <div className="flex gap-8 items-center justify-center my-15">
                  <Pages
                    total={resolvedProducts.totalPages}
                    url={`/search/products/category/${categoryName}/page/`}
                  />
                </div>
              )}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
