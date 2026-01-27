import Banner from "@/Components/home/Banner";
import FeaturedProductsDesktop from "@/Components/home/FeaturedProductsDesktop";
import FeaturedProductsMobile from "@/Components/home/FeaturedProductsMobile";
import Payments from "@/Components/home/Payments";
import { SkeletonProducts } from "@/Components/products/SkeletonProducts";
import UnavailableProducts from "@/Components/products/UnavailableProducts";
import { axiosInstance } from "@/lib/axios";
import {
  productArraySchema,
  type ProductArraySchema,
} from "@/validations/schemas";
import { Suspense, useEffect } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { useAddedProductStore } from "@/stores/useAddedProductStore";

export const loader = () => {
  const productsPromise = axiosInstance
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

  return { products: productsPromise };
};

export const Component = () => {
  const { products } = useLoaderData() as {
    products: Promise<ProductArraySchema>;
  };

  const { setAddedProduct } = useAddedProductStore();

  //Limpa o state com o produto que foi adicionado ao carrinho
  useEffect(() => {
    return () => setAddedProduct(null);
  }, [setAddedProduct]);

  return (
    <div>
      <Banner />
      <h1 className="mt-8 text-base xl:text-xl">Peças de destaque</h1>
      <Suspense fallback={<SkeletonProducts />}>
        <Await resolve={products}>
          {(resolvedProducts) => (
            <>
              {/* Componente de produtos em destaque mobile */}
              {resolvedProducts.length > 0 && (
                <FeaturedProductsMobile products={resolvedProducts} />
              )}
              {/* Componente de produtos em destaque desktop */}
              {resolvedProducts.length > 0 && (
                <FeaturedProductsDesktop products={resolvedProducts} />
              )}
              {/* Componente de produtos indisponíveis para casos de erro */}
              {resolvedProducts.length === 0 && <UnavailableProducts />}
            </>
          )}
        </Await>
      </Suspense>

      <Payments />
    </div>
  );
};
