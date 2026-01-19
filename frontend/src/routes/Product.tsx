import ProductCard from "@/Components/products/ProductCard";
import SkeletonProduct from "@/Components/products/SkeletonProduct";

import { axiosInstance } from "@/lib/axios";
import { productSchema, type ProductSchema } from "@/validations/schemas";
import { Suspense } from "react";
import {
  Await,
  redirect,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router-dom";

export const loader = ({ request, params }: LoaderFunctionArgs) => {
  const { id } = params;

  const productPromise = axiosInstance
    .get(`/products/${id}`, { signal: request.signal })
    .then((res) => {
      const { success, data } = productSchema.safeParse(res);

      if (!success) {
        return redirect("/");
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
      return redirect("/");
    });

  return { product: productPromise };
};

export const Component = () => {
  const { product } = useLoaderData() as { product: Promise<ProductSchema> };

  return (
    <div>
      <Suspense fallback={<SkeletonProduct />}>
        <Await resolve={product}>
          {(resolvedProduct) => (
            <div className="flex flex-col justify-center lg:grid lg:grid-cols-[1fr_1fr] w-full   mx-auto mt-15 mb-40 px-8 gap-10 sm:w-4/5">
              <ProductCard product={resolvedProduct} />
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
