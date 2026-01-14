import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

const ProductsMenu = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1 text-lg">
        <AccordionTrigger>Produtos</AccordionTrigger>
        <AccordionContent>All</AccordionContent>
        <AccordionContent>Camisetas</AccordionContent>
        <AccordionContent>Calças</AccordionContent>
        <AccordionContent>Bermudas e Shorts</AccordionContent>
        <AccordionContent>Casacos</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductsMenu;
