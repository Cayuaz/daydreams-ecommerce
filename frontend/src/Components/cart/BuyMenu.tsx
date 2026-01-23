import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import Button from "../Button";
import { formPrice } from "@/lib/utils";
import Size from "../products/Size";
import { useEffect, useState } from "react";
import type { ProductSchema } from "@/validations/schemas";
import { useCartStore } from "@/stores/useCartStore";

type BuyMenuProps = {
  product: ProductSchema;
};

const BuyMenu = ({ product }: BuyMenuProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { addItem } = useCartStore();

  //Utiliza o método do useCartStore para adicionar um novo item ao carrinho de compras
  const buyProduct = () => {
    if (selectedSize) {
      addItem({ ...product, size: selectedSize, qtd: 0 });
      console.log("Item add");
      setIsOpen(false);
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
        <SheetTrigger>
          <Button className="w-full px-8">COMPRAR</Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="bg-(--primary-color) text-white border-0 h-2/5"
        >
          <SheetHeader className="flex flex-col gap-4">
            <SheetTitle className="font-normal text-xl">
              {product.name}
            </SheetTitle>
            <SheetTitle className="font-normal text-sm">
              {formPrice(product.price)}
            </SheetTitle>
            <div>
              <Size
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                className=" text-white border-white"
              />
            </div>
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
