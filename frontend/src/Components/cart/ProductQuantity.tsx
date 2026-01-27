import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";

type ProductQuantityProps = {
  id: string;
  size: string;
  value: number;
  className: string;
};

const ProductQuantity = ({
  id,
  size,
  value,
  className,
}: ProductQuantityProps) => {
  const { increment, decrement } = useCartStore();

  //Função que chama o método de decrementar do state do carrinho de compras
  const handleMinus = () => {
    if (value !== 1) {
      decrement(id, size);
    }
  };

  //Função que chama o método de incrementar do state do carrinho de compras
  const handlePlus = () => increment(id, size);

  return (
    //Container com os botões de aumentar e diminuir a quantidade de um determinado produto
    <div
      className={`border border-gray-500 gap-2 justify-around items-center px-2 w-40 mx-auto ${className}`}
    >
      <Minus
        className={`size-4 ${value === 1 ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105"}`}
        onClick={handleMinus}
      />
      <span className=" border-x border-x-gray-500 w-3/6 py-2 text-sm sm:text-base">
        {value}
      </span>
      <Plus className="size-4 hover:scale-105" onClick={handlePlus} />
    </div>
  );
};

export default ProductQuantity;
