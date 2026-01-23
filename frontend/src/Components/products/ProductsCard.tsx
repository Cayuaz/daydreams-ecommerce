import type { ProductSchema } from "@/validations/schemas";
import { formPrice } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import BuyMenu from "../cart/BuyMenu";
import Button from "../Button";
import { useProductStore } from "@/stores/useProductStore";

type ProductCardProps = {
  product: ProductSchema;
  imgWidth: string;
};

const ProductsCard = ({ product, imgWidth }: ProductCardProps) => {
  const navigate = useNavigate();
  const { setProduct } = useProductStore();

  const handleAddProduct = () => {
    setProduct(product);
  };

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
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <span className="text-sm sm:text-base">{product.name}</span>
      <span className="text-sm font-bold">{formPrice(product.price)}</span>

      <BuyMenu product={product} />
      <Button className="hidden sm:block" click={handleAddProduct}>
        COMPRAR
      </Button>
    </div>
  );
};

export default ProductsCard;
