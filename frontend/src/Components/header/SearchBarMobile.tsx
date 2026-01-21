import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  //   SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

const SearchBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  //verifica a largura da tela e muda o isOpen para false caso a tela seja maior que 640px
  //Isso evita que o menu da searchBar permaneça aberto mesmo depois da tela aumentar de tamanho
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
        <Search className="hover:text-(--secondary-color) cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="bg-(--primary-color) text-white h-full border-0 flex"
      >
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription>
            <SearchBar
              setOpen={setIsOpen}
              className="border border-white/50 text-white bg-none"
              inputTextColor="text-white"
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchBarMobile;
