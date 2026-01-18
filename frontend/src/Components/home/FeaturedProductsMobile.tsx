import type { ProductArraySchema } from "@/validations/schemas";
import ProductCard from "../products/ProductCard";

type FeaturedProductsMobileProps = {
  products: ProductArraySchema;
};

const FeaturedProductsMobile = ({ products }: FeaturedProductsMobileProps) => {
  return (
    <div className="lg:hidden justify-center items-center grid grid-cols-2 mt-6 mb-18 gap-2 ">
      {products.map((product) => (
        <ProductCard
          product={product}
          imgWidth="w-4/6"
          btn={false}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default FeaturedProductsMobile;
