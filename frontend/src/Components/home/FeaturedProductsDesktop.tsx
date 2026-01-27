import type { ProductArraySchema, ProductSchema } from "@/validations/schemas";
import { formPrice } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "@/stores/useProductStore";

type FeaturedProductsDesktopProps = {
  products: ProductArraySchema;
};

const FeaturedProductsDesktop = ({
  products,
}: FeaturedProductsDesktopProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();
  const { setProduct } = useProductStore();

  const handleAddProduct = (product: ProductSchema) => {
    setProduct(product);
  };

  // o "|| 1" evita erro de divisão por zero se não houver produtos
  //8 produtos: 8 / 4 = 2
  const totalPages = Math.ceil(products.length / itemsPerPage) || 1;

  const nextSlide = () => {
    if (currentIndex < itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="overflow-hidden hidden lg:block px-2 mt-10 mb-40 w-full lg:w-4/5 mx-auto relative group">
      {/* botão Esquerdo */}
      <ChevronLeft
        className={`absolute left-0 size-15 top-1/2 -translate-y-1/2 cursor-pointer z-1 transition-opacity ${
          currentIndex === 0
            ? "opacity-30 cursor-not-allowed"
            : "opacity-100 hover:scale-110"
        }`}
        onClick={prevSlide}
      />

      {/* botão Direito */}
      <ChevronRight
        className={`absolute right-0 size-15 top-1/2 -translate-y-1/2 cursor-pointer z-1 transition-opacity ${
          /*O botão de mostrar o próximo item pode ser apertado apenas 4 vezes, pois há 8 itens e 4 já estão sendo exibidos,
          a mesma lógica poderia ser aplicada a mais itens, se tivessem 12, 4 já estão sendo exibidos. então restam 8 a serem mostrados
          */
          currentIndex === Math.ceil(products.length - itemsPerPage)
            ? "opacity-30 cursor-not-allowed"
            : "opacity-100 hover:scale-110"
        }`}
        onClick={nextSlide}
      />

      {/* trilho do Carrossel */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          /*100 / products.length é o valor referente ao tamanho de cada produto
          a ideia é que o "trilho" se mova proporcionalmente ao item
          então: index = 2 e 100 / products.length = 12,5
          2 * 12,5 = 25, então o trilho se move dois itens para frente ou para trás  
          */
          transform: `translateX(-${currentIndex * (100 / products.length)}%)`,
          //se são duas páginas então é 200%
          width: `${totalPages * 100}%`,
        }}
      >
        {products.map((product) => (
          <div
            className="flex flex-col items-center gap-2 shrink-0 justify-between"
            //se há 4 itens por página e um total de 2 páginas, então
            style={{ width: `${100 / products.length}%` }}
            key={product.id}
          >
            <img
              src={product.imageUrl}
              alt="Produto de destaque"
              className="w-3/5 object-contain hover:scale-105 transition-transform"
              onClick={() => navigate(`/products/${product.id}`)}
            />
            <span className="text-sm text-center">{product.name}</span>
            <span className="text-sm font-bold">
              {formPrice(product.price)}
            </span>
            <Button click={() => handleAddProduct(product)}>comprar</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsDesktop;
