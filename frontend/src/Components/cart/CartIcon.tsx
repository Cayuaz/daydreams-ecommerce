import { useCartStore } from "@/stores/useCartStore";
import { Handbag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const navigate = useNavigate();
  const { Cart, counter } = useCartStore();
  const total = counter();

  return (
    <div className="relative">
      <Handbag
        className="hover:text-(--secondary-color) transition-colors"
        onClick={() => navigate("/shop-cart")}
      />
      {/* Container que mostra o número de produtos que estão no carrinho */}
      {total > 0 && (
        <div
          className={`flex items-center justify-center bg-black text-white rounded-full absolute top-3 -right-4 text-sm shadow border border-white/10 ${
            Cart.length > 99 ? "size-8 -right-5" : "size-7 "
          }`}
        >
          <span>{total}</span>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
