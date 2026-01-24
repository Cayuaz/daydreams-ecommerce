// import { useCartStore } from "@/stores/useCartStore"
import { useSizeStore } from "@/stores/useSizeStore";
import { useProductStore } from "@/stores/useProductStore";
import { formPrice } from "@/lib/utils";
import Size from "../products/Size";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useAddProduct } from "@/hooks/useAddProduct";
import { motion, AnimatePresence } from "framer-motion";

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
    /* O AnimatePresence é essencial na renderização condicional, em vez de usar a renderização no conteúdo do componente,
    se usa em todo container, e o AnimatePresence com exit garantem que o componente permaneça na tela mesmo que o estado seja null
    e que ele faça uma transição ao sumir, sem desaparecer bruscamente
    */
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-500 `}
          onClick={closeMenu}
        >
          {/* O motion.div permite utilizar animações de um jeito mais prático
          initial(estado que a animação começa): o container aparece 30px abaixo da posição inicial, com opacidade 0 e scale 0.9
          animate(estado final da animação): o container aparece em sua posição original, com opacidade e scale 1
          exit(estado de saída da animação): o container aparece 20px abaixo da posição original, com opacidade 0 e scale 0.95

          Observação: com o frame-motion não é necessário utilizar o translate e o position para animações, apenas para centralização
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`
          fixed left-1/2 z-50 w-full max-w-md
          bg-[#1a1a1a] p-8 rounded-md border border-white/10 text-white
          -translate-x-1/2  translate-y-1/2
        `}
            onClick={(e) => e.stopPropagation()}
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BuyDesktopMenu;
