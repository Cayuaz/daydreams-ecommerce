import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Link } from "react-router";
import { SheetClose } from "../ui/sheet";

const ProductsMenu = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1 text-lg">
        <AccordionTrigger>Produtos</AccordionTrigger>
        <AccordionContent className="hover:text-[#974947] transition-colors duration-300 ease-in-out">
          <SheetClose asChild>
            <Link to="/products/page/1">All</Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="hover:text-[#974947] transition-colors duration-300 ease-in-out">
          <SheetClose asChild>
            <Link to="/products/category/camisetas/1">Camisetas</Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="hover:text-[#974947] transition-colors duration-300 ease-in-out">
          <SheetClose asChild>
            <Link to="/products/category/calcas/1">Calças</Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="hover:text-[#974947] transition-colors duration-300 ease-in-out">
          <SheetClose asChild>
            <Link to="/products/category/jorts-shorts/1">
              Bermudas e Shorts
            </Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="hover:text-[#974947] transition-colors duration-300 ease-in-out">
          <SheetClose asChild>
            <Link to="/products/category/casacos/1">Casacos</Link>
          </SheetClose>
        </AccordionContent>
        <AccordionContent className="hover:text-[#974947] transition-colors duration-300 ease-in-out">
          <SheetClose asChild>
            <Link to="/products/category/acessorios/1">Acessórios</Link>
          </SheetClose>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductsMenu;
