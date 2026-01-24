import { formPrice } from "@/lib/utils";
import type { ProductSchema } from "@/validations/schemas";
import { Separator } from "../ui/separator";
import Button from "../Button";
import Size from "./Size";

import { useSizeStore } from "@/stores/useSizeStore";
import { useAddProduct } from "@/hooks/useAddProduct";
import { useEffect } from "react";

type ProductCardProps = { product: ProductSchema };

const ProductCard = ({ product }: ProductCardProps) => {
  //State global dos tamanhos dos produtos [P, M, G e GG]
  const { selectedSize, setSelectedSize } = useSizeStore();
  //State global do carrinho de compras
  const execute = useAddProduct();

  const buyProduct = () => {
    if (selectedSize) {
      execute({ ...product, size: selectedSize, qtd: 0 });
      console.log("Item add");
    }
  };

  //Reseta o size quando o usuário sai da página
  useEffect(() => {
    return () => setSelectedSize(null);
  }, [setSelectedSize]);

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
        {/* Componente dos tamanhos dos produtos */}
        <Size />
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
