import Banner from "@/Components/home/Banner";
import FeaturedProductsDesktop from "@/Components/home/FeaturedProductsDesktop";
import FeaturedProductsMobile from "@/Components/home/FeaturedProductsMobile";
import Payments from "@/Components/home/Payments";
import { axiosInstance } from "@/services/axios";
import {
  productArraySchema,
  type ProductArraySchema,
} from "@/validations/schemas";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const productData = await axiosInstance.get("/products/featured");

  const { success, data } = productArraySchema.safeParse(productData);

  if (!success) return [];

  return data;
};

export const Component = () => {
  const products = useLoaderData() as ProductArraySchema;
  console.log(products);

  return (
    <div>
      <Banner />
      <h1 className="mt-8 text-xl">Peças de dstaque</h1>
      {products && <FeaturedProductsMobile products={products} />}
      {products && <FeaturedProductsDesktop products={products} />}
      <Payments />
    </div>
  );
};
