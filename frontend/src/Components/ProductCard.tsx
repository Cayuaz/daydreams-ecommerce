import type { ProductSchema } from "@/validations/schemas";
import Button from "./Button";
import { formPrice } from "@/lib/utils";

type ProductCardProps = {
  product: ProductSchema;
  imgWidth: string;
  btn: boolean;
};

const ProductCard = ({ product, imgWidth, btn }: ProductCardProps) => {
  // Componente de card de produtos
  return (
    <div
      className="flex flex-col items-center gap-2 flex-wrap justify-between"
      key={product.id}
    >
      <img
        src={product.imageUrl}
        alt="Produto de destaque"
        className={`${imgWidth} sm:w-3/6 hover:scale-105 transition-transform`}
      />
      <span className="text-sm sm:text-base">{product.name}</span>
      <span className="text-sm font-bold">{formPrice(product.price)}</span>
      {btn && <Button>COMPRAR</Button>}
    </div>
  );
};

export default ProductCard;
