import { formPrice } from "@/lib/utils";
import type { ProductArraySchema } from "@/validations/schemas";

type FeaturedProductsMobileProps = {
  products: ProductArraySchema;
};

const FeaturedProductsMobile = ({ products }: FeaturedProductsMobileProps) => {
  return (
    <div className="sm:hidden justify-center items-center grid grid-cols-2 mt-6 mb-18 gap-2 ">
      {products.map((product) => (
        <div
          className="flex flex-col items-center gap-2 flex-wrap"
          key={product.id}
        >
          <img
            src={product.imageUrl}
            alt="Produto de destaque"
            className="w-4/6"
          />
          <span className="text-sm">{product.name}</span>
          <span className="text-sm font-bold">{formPrice(product.price)}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsMobile;
