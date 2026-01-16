import Banner from "@/Components/home/Banner";
import FeaturedProductsDesktop from "@/Components/home/FeaturedProductsDesktop";
import FeaturedProductsMobile from "@/Components/home/FeaturedProductsMobile";
import Payments from "@/Components/home/Payments";
import ProductSkeleton from "@/Components/ProductSkeleton";
import UnavailableProducts from "@/Components/UnavailableProducts";
import { axiosInstance } from "@/services/axios";
import {
  productArraySchema,
  type ProductArraySchema,
} from "@/validations/schemas";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

//
export const loader = () => {
  const productPromise = axiosInstance
    .get("/products/featured")
    .then((res) => {
      console.log(res);
      const { success, data } = productArraySchema.safeParse(res);

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

  return { products: productPromise };
};

export const Component = () => {
  const { products } = useLoaderData() as {
    products: Promise<ProductArraySchema>;
  };
  console.log(products);

  return (
    <div>
      <Banner />
      <h1 className="mt-8 text-base">Peças de destaque</h1>
      <Suspense fallback={<ProductSkeleton />}>
        <Await resolve={products}>
          {(resolvedProducts) => (
            <>
              {resolvedProducts.length > 0 && (
                <FeaturedProductsMobile products={resolvedProducts} />
              )}
              {resolvedProducts.length > 0 && (
                <FeaturedProductsDesktop products={resolvedProducts} />
              )}
              {resolvedProducts.length === 0 && <UnavailableProducts />}
            </>
          )}
        </Await>
      </Suspense>

      <Payments />
    </div>
  );
};
