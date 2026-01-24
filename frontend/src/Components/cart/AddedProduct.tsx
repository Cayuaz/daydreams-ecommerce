import { formPrice } from "@/lib/utils";
import { useAddedProductStore } from "@/stores/useAddedProductStore";
import { Check, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    /* Em dispositivos móveis o container vem de baixo pra cima e fica centralizado (top-1/2 e -translate-y-1/2) 
     Em dispositivos com telas maiores o container fica no topo a direita e aparece gradualmente (sm:left-auto sm:right-4 sm:translate-x-0)
     */
    <div
      className={`w-full max-w-sm z-50 
          bg-[#1a1a1a] py-6 px-4 rounded-md border shadow border-white/10 text-white fixed transition-all duration-700 ease-in-out left-1/2 sm:left-auto sm:right-4 sm:translate-x-0 -translate-x-1/2 ${addedProduct ? "top-1/2 -translate-y-1/2 opacity-100 scale-100 sm:top-24 sm:translate-y-0" : "opacity-0 scale-95 top-[110%] sm:top-24"}`}
    >
      {addedProduct && (
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
              <span className="text-[0.8rem]">Item adicionado ao carrinho</span>
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
      )}
    </div>
  );
};

export default AddedProduct;
