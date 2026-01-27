import { useCartStore } from "@/stores/useCartStore";
import ProductQuantity from "./ProductQuantity";
import { Trash } from "lucide-react";
import { formPrice } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const CartProducts = () => {
  //State global do carrinho de compras
  const { Cart, removeProduct, total } = useCartStore();
  const navigate = useNavigate();
  const formattedTotal = formPrice(total());

  return (
    <div>
      {/* Títulos das informações do carrinho */}
      <div className="grid grid-cols-2 sm:grid-cols-3 mb-2">
        <span>Produto</span>
        <span className="hidden sm:block">Quantidade</span>
        <span>Preço</span>
      </div>
      {/* Cards dos produtos do carrinho de compras */}
      <div className="border-y border-y-gray-500 py-6 px-4 flex flex-col items-center justify-between w-full gap-6">
        {Cart.map((product) => (
          // A coluna de quantidade é escondida em telas menores e exibida apenas em telas maiores
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-1">
            {/* Imagem e nome do produto */}
            <div className="flex flex-col items-center gap-1 sm:gap-0">
              <span className="text-lg">{product.name}</span>
              <img
                src={product.imageUrl}
                alt="Produto do carrinho"
                className="w-4/5 sm:w-3/5 xl:w-2/5 hover:scale-105 transition-transform"
                onClick={() => navigate(`/products/${product.id}`)}
              />
              {/* Em dispositivos móveis a coluna de quantidade é exibida aqui */}
              <ProductQuantity
                id={product.id}
                size={product.size}
                value={product.qtd}
                className="flex sm:hidden"
              />
            </div>
            {/* Quantidade do produto  */}
            <ProductQuantity
              id={product.id}
              size={product.size}
              value={product.qtd}
              className="hidden sm:flex"
            />
            {/* Detalhes do produto */}
            <div className="flex flex-col gap-3 items-center">
              <Trash
                className=" size-5 ml-14 hover:text-(--secondary-color) transition-colors"
                onClick={() => removeProduct(product.id, product.size)}
              />
              <span>{formPrice(product.price)}</span>
              <p>
                Tamanho: <span className="font-bold">{product.size}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-left ml-8">
        <span className="text-xl">Total estimado: {formattedTotal}</span>
      </div>
    </div>
  );
};

export default CartProducts;
