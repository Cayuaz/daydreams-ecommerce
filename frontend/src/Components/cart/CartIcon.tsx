import { useCartStore } from "@/stores/useCartStore";
import { Handbag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const navigate = useNavigate();
  const { Cart } = useCartStore();

  return (
    <div className="relative">
      <Handbag
        className="hover:text-(--secondary-color) transition-colors"
        onClick={() => navigate("/shop-cart")}
      />
      {Cart.length > 0 && (
        <div
          className={`flex items-center justify-center bg-black text-white/80 rounded-full absolute top-3 -right-4 text-sm shadow border border-white/10 ${
            Cart.length > 99 ? "size-8 -right-5" : "size-7 "
          }`}
        >
          <span className="flex items-center justify-center text-center">
            {10}
          </span>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
