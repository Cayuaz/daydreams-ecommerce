import type { ProductArraySchema } from "@/validations/schemas";
import { formPrice } from "@/lib/utils";

type FeaturedProductsDesktopProps = {
  products: ProductArraySchema;
};

const FeaturedProductsDesktop = ({
  products,
}: FeaturedProductsDesktopProps) => {
  return (
    <div>
      <div>
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
            <span className="text-sm font-bold">
              {formPrice(product.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsDesktop;
