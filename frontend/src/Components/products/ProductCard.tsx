import { formPrice } from "@/lib/utils";
import type { ProductSchema } from "@/validations/schemas";
import { useState } from "react";
import { Separator } from "../ui/separator";
import Button from "../Button";
import Size from "./Size";
import { useCartStore } from "@/stores/useCartStore";

type ProductCardProps = { product: ProductSchema };

const ProductCard = ({ product }: ProductCardProps) => {
  //Size vai conter o tamanho selecionado, e no Size component vai ser verificado qual botão está selecionado
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCartStore();

  const buyProduct = () => {
    if (selectedSize) {
      addItem({ ...product, size: selectedSize, qtd: 0 });
      console.log("Item add");
    }
  };

  return (
    <>
      {/* Imagem do produto */}
      <div className="bg-[#6A6868] flex justify-center items-center rounded ">
        <img
          src={product.imageUrl}
          alt={`Produto - ${product.name}`}
          className="size-80 sm:size-100  hover:scale-105 transition-transform"
        />
      </div>
      {/* Detalhes do produto */}
      <div className="flex flex-col justify-between gap-6 w-full">
        <div className="text-left ">
          <h1>{product.name}</h1>
          <span className="text-base font-bold">
            {formPrice(product.price)}
          </span>
        </div>
        <p className="text-left text-sm">{product.description}</p>
        <Separator orientation="horizontal" className="bg-black " />
        {/* Componente de tamanho */}
        <Size selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        {/* Botão de comprar */}
        <Button
          className="w-full"
          disabled={selectedSize ? false : true}
          click={buyProduct}
        >
          COMPRAR
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
