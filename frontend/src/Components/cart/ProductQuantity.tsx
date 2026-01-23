import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type ProductQuantityProps = {
  value: number;
};

const ProductQuantity = ({ value }: ProductQuantityProps) => {
  const [number, setNumber] = useState(value);

  const handleMinus = () => {
    if (number !== 0) {
      setNumber(number - 1);
    }
  };

  const handlePlus = () => setNumber(number + 1);

  return (
    <div className="border border-gray-500 flex gap-2 justify-around items-center px-2 w-40">
      <Minus className="size-4" onClick={handleMinus} />
      <span className=" border-x border-x-gray-500 w-3/6 py-2 text-sm sm:text-base">
        {number}
      </span>
      <Plus className="size-4" onClick={handlePlus} />
    </div>
  );
};

export default ProductQuantity;
