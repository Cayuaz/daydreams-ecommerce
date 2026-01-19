import {
  Sheet,
  SheetClose,
  SheetContent,
  //   SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsMenu from "./ProductsMenu";

export const HeaderMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="hover:text-[#974947]" />
      </SheetTrigger>
      <SheetContent className="bg-[#222224]">
        <SheetHeader className="flex flex-col gap-4">
          <SheetTitle className="font-normal">
            <SheetClose asChild>
              <Link to={"/"} className="hover:text-[#974947] hover:underline">
                Home
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetTitle className="font-normal">
            <SheetClose asChild>
              <Link
                to={"/About"}
                className="hover:text-[#974947] hover:underline"
              >
                Sobre
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetTitle className="font-normal group flex items-center">
            <SheetClose asChild>
              <ProductsMenu />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
