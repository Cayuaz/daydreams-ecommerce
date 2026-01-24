import { formPrice } from "@/lib/utils";
import { useAddedProductStore } from "@/stores/useAddedProductStore";
import { Check, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AddedProduct = () => {
  const { addedProduct, setAddedProduct } = useAddedProductStore();
  const navigate = useNavigate();

  //FUnção de fechamento
  //O useCallback serve para memorizar a função de fechamento e ela não precisar ser recriada toda vez que o useEffect disparar
  const handleClose = useCallback(() => {
    setAddedProduct(null);
  }, [setAddedProduct]);

  //Timer de auto-fechamento sincronizado com o estado do produto
  useEffect(() => {
    if (addedProduct) {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [addedProduct, handleClose]);

  const handleCart = () => {
    handleClose();
    navigate("/shop-cart");
  };

  return (
    /* O AnimatePresence é essencial na renderização condicional, em vez de usar a renderização no conteúdo do componente,
    se usa em todo container, e o AnimatePresence com exit garantem que o componente permaneça na tela mesmo que o estado seja null
    e que ele faça uma transição ao sumir, sem desaparecer bruscamente
    */
    <AnimatePresence>
      {addedProduct && (
        /* O motion.div permite utilizar animações de um jeito mais prático
          initial(estado que a animação começa): o container aparece 50px abaixo da posição inicial, com opacidade 0 e scale 0.9
          animate(estado final da animação): o container aparece em sua posição original, com opacidade e scale 1
          exit(estado de saída da animação): o container aparece 20px abaixo da posição original, com opacidade 0 e scale 0.95

          Observação: com o frame-motion não é necessário utilizar o translate e o position para animações, apenas para centralização
          */
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20, pointerEvents: "none" }}
          transition={{ duration: 0.3 }}
          className={`w-full max-w-sm z-50 
          bg-[#1a1a1a] py-6 px-4 rounded-md border shadow border-white/10 text-white fixed left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 sm:top-50 sm:left-auto sm:right-4 sm:translate-x-0 `}
        >
          <div className="flex gap-4 items-center relative">
            {/* Imagem do produto */}
            <img
              src={addedProduct.imageUrl}
              alt="Produto adicionado ao carrinho"
              className="w-2/6 bg-[#6A6868] rounded-sm"
            />
            {/* Informações do produto */}
            <div className="flex flex-col gap-2">
              <span className="text-[0.8rem] text-left">
                {addedProduct.name} ({addedProduct.size})
              </span>
              <span className="text-[0.8rem] text-left">
                {formPrice(addedProduct.price)}
              </span>
              {/* Mensagem de produto adicionado */}
              <div className="flex justify-center items-center gap-2">
                <Check className="size-4" />{" "}
                <span className="text-[0.8rem]">
                  Item adicionado ao carrinho
                </span>
              </div>
              {/* Botão que redireciona o usuário para a página do carrinho de compras */}
              <button
                type="button"
                className={`text-center uppercase text-sm bg-black w-full px-6 py-2 rounded-sm hover:bg-[#0d0d0d]`}
                onClick={handleCart}
              >
                Ver carrinho
              </button>
            </div>
            <X
              className="absolute top-0 right-0 size-4 cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddedProduct;
