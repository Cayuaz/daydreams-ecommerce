import ProductCard from "@/Components/ProductCard";
import ProductSkeleton from "@/Components/ProductSkeleton";
import UnavailableProducts from "@/Components/UnavailableProducts";
import { axiosInstance } from "@/services/axios";
import {
  productsAndTotalSchema,
  type ProductsAndTotalSchema,
} from "@/validations/schemas";
import { Suspense } from "react";
import {
  Await,
  NavLink,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router-dom";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || "1";
  console.log(page);

  const productsPromise = axiosInstance
    .get(`/products?query=""page=${page}`, { signal: request.signal })
    .then((res) => {
      console.log(res);
      const { success, data } = productsAndTotalSchema.safeParse(res);

      if (!success) {
        console.log("Falha na verificação dos produtos!");
        return [];
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });

  return productsPromise;
};

export const Component = () => {
  const productsAndTotal = useLoaderData() as Promise<ProductsAndTotalSchema>;
  return (
    <div>
      <h1 className="my-8 text-base xl:text-xl">Conheça os nossos produtos!</h1>
      <Suspense fallback={<ProductSkeleton />}>
        <Await resolve={productsAndTotal}>
          {(resolvedProducts) => (
            <>
              <div className="grid grid-cols-4 gap-8 my-10">
                {resolvedProducts.products.length > 0 &&
                  resolvedProducts.products.map((product) => (
                    <ProductCard
                      product={product}
                      imgWidth="w-4/6"
                      btn={true}
                      key={product.id}
                    />
                  ))}
                {resolvedProducts.products.length === 0 && (
                  <UnavailableProducts />
                )}
              </div>
              <div className="flex gap-8 items-center justify-center my-15">
                {resolvedProducts.total > 1 &&
                  Array.from({ length: resolvedProducts.total }, (_, i) => (
                    <NavLink
                      to={`/products/page/${i + 1}`}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-[#974947] rounded-full size-6 shadow"
                            : ""
                        } transition-colors`
                      }
                      key={i}
                    >
                      {i + 1}
                    </NavLink>
                  ))}
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
