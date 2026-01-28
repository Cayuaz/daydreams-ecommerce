import type { ProductArraySchema } from "@/validations/schemas";
import ProductCard from "../products/ProductsCard";

type FeaturedProductsMobileProps = {
  products: ProductArraySchema;
};

const FeaturedProductsMobile = ({ products }: FeaturedProductsMobileProps) => {
  return (
    <div className="lg:hidden grid grid-cols-2 mt-6 mb-24 gap-8 px-8">
      {products.map((product) => (
        <ProductCard product={product} imgWidth="w-4/6" key={product.id} />
      ))}
    </div>
  );
};

export default FeaturedProductsMobile;
