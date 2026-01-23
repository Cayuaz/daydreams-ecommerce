import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type ProductQuantityProps = {
  value: number;
  className: string;
};

const ProductQuantity = ({ value, className }: ProductQuantityProps) => {
  const [number, setNumber] = useState(value);

  const handleMinus = () => {
    if (number !== 0) {
      setNumber(number - 1);
    }
  };

  const handlePlus = () => setNumber(number + 1);

  return (
    <div
      className={`border border-gray-500 gap-2 justify-around items-center px-2 w-40 mx-auto ${className}`}
    >
      <Minus
        className={`size-4 ${number === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-105"}`}
        onClick={handleMinus}
      />
      <span className=" border-x border-x-gray-500 w-3/6 py-2 text-sm sm:text-base">
        {number}
      </span>
      <Plus className="size-4 hover:scale-105" onClick={handlePlus} />
    </div>
  );
};

export default ProductQuantity;
