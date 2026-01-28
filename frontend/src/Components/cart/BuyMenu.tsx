import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";

import { formPrice } from "@/lib/utils";
import Size from "../products/Size";
import { useEffect, useState } from "react";
import type { ProductSchema } from "@/validations/schemas";
import { useSizeStore } from "@/stores/useSizeStore";
import { useAddProduct } from "../../hooks/useAddProduct";

type BuyMenuProps = {
  product: ProductSchema;
};

const BuyMenu = ({ product }: BuyMenuProps) => {
  //State global dos tamanhos dos produtos [P, M, G e GG]
  const { selectedSize, setSelectedSize } = useSizeStore();
  //State do componente sheet do shadcn/ui
  const [isOpen, setIsOpen] = useState(false);
  // Custom Hook que cuida de executar a ação de adicionar um item ao carrinho e de mostrar o componente de item adicionado
  const execute = useAddProduct();

  //Utiliza o método do useAddItem para adicionar um novo item ao carrinho de compras
  const buyProduct = () => {
    if (selectedSize) {
      execute({ ...product, size: selectedSize, qtd: 0 });
      setIsOpen(false);
      setSelectedSize(null);
    }
  };

  //Reseta o tamanho selecionado caso o menu seja fechado
  const handleOpen = (open: boolean) => {
    setIsOpen(open);
    if (!open) setSelectedSize(null);
  };

  //verifica a largura da tela e muda o isOpen para false caso a tela seja maior que 640px
  //Isso evita que o menu permaneça aberto mesmo depois da tela aumentar de tamanho
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth > 640) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sm:hidden w-full">
      <Sheet open={isOpen} onOpenChange={handleOpen}>
        <SheetTrigger className="w-full flex items-center justify-center px-8 py-2 text-center text-sm rounded-sm bg-[#222224] hover:bg-[#323235] text-white transition-colors uppercase ">
          COMPRAR
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="bg-(--primary-color) text-white border-0 h-3/5"
        >
          <SheetHeader className="flex flex-col gap-4">
            {/* Nome do produto */}
            <SheetTitle className="font-normal text-xl">
              {product.name}
            </SheetTitle>
            {/* Preço do produto */}
            <SheetTitle className="font-normal text-sm">
              {formPrice(product.price)}
            </SheetTitle>

            {/* Componente dos tamanhos dos produtos */}
            <Size className=" text-white border-white" />

            {/* Botão com o evento de adicionar um item ao carrinho de compras */}
            <button
              type="submit"
              className={`${selectedSize ? "disabled:opacity-100" : "disabled:opacity-50"} uppercase text-sm flex bg-black w-fit px-6 py-2 rounded-sm hover:bg-[#0d0d0d]`}
              disabled={selectedSize ? false : true}
              onClick={buyProduct}
            >
              comprar
            </button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BuyMenu;
