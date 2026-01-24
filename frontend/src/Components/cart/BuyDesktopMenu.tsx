// import { useCartStore } from "@/stores/useCartStore"
import { useSizeStore } from "@/stores/useSizeStore";
import { useProductStore } from "@/stores/useProductStore";
import { formPrice } from "@/lib/utils";
import Size from "../products/Size";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useAddProduct } from "@/hooks/useAddProduct";

const BuyDesktopMenu = () => {
  const { selectedSize, setSelectedSize } = useSizeStore();
  const { product, setProduct } = useProductStore();
  const execute = useAddProduct();

  //Fecha o menu
  const closeMenu = () => {
    setProduct(null);
    setSelectedSize(null);
  };

  //Utiliza o método do useCartStore para adicionar um novo item ao carrinho de compras
  const buyProduct = () => {
    if (selectedSize && product) {
      execute({ ...product, size: selectedSize, qtd: 0 });
      closeMenu();
    }
  };

  //Desativa a barra de scroll quando o menu está aberto
  useEffect(() => {
    const body = document.body;

    if (product) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [product]);

  return (
    <div
      className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 ${
        product
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={closeMenu}
    >
      <div
        className={`
          fixed left-1/2 z-50 w-full max-w-md
          bg-[#1a1a1a] p-8 rounded-md border border-white/10 text-white
          transition-all duration-700 ease-in-out
          -translate-x-1/2 
          ${
            product
              ? "top-1/2 -translate-y-1/2 opacity-100 scale-100"
              : "top-full translate-y-0 opacity-0 scale-95"
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {product && (
          <div className="flex flex-col items-start gap-4 relative">
            {/* Nome do produto */}
            {product && (
              <span className="font-normal text-xl">{product.name}</span>
            )}
            {/* Preço do produto */}
            {product && (
              <span className="font-normal text-sm">
                {formPrice(product.price)}
              </span>
            )}
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
            </button>{" "}
            <X
              className="position absolute top-0 right-1 text-white"
              onClick={closeMenu}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyDesktopMenu;
