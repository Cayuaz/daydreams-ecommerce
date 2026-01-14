import Banner from "@/Components/home/Banner";
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

  if (!success) return false;

  return data;
};

export const Component = () => {
  const products = useLoaderData() as ProductArraySchema;
  console.log(products);

  return (
    <div>
      <Banner />
      <h1 className="mt-8">Peças de destaque</h1>
      {products && <FeaturedProductsMobile products={products} />}
      <Payments />
    </div>
  );
};
