import { useCartStore } from "@/stores/useCartStore";
import ProductQuantity from "./ProductQuantity";

const CartProducts = () => {
  const { Cart } = useCartStore();

  return (
    <div>
      <div className="flex">
        <span>Produto</span>
        <span>Quantidade</span>
        <span>Total</span>
      </div>
      <div className="border-y border-y-gray-500 py-6 px-4 flex flex-col items-center">
        {Cart.map((product) => (
          <div>
            {product.name} <ProductQuantity value={1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
