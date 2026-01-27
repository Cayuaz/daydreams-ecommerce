import { useAddedProductStore } from "@/stores/useAddedProductStore";
import { useCartStore } from "@/stores/useCartStore";
import type { ProductCartSchema } from "@/validations/schemas";

/* Custom hook que adiciona um produto ao carrinho com o método addProduct do useCartStore,
e que também ativa o state addedProduct */
export const useAddProduct = () => {
  const { addProduct, counter } = useCartStore();
  const { setAddedProduct } = useAddedProductStore();

  const execute = (item: ProductCartSchema) => {
    if (counter() === 100) {
      return;
    }

    addProduct(item);
    setAddedProduct(item);
  };

  return execute;
};
