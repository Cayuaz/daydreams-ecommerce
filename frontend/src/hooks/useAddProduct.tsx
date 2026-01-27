import { useAddedProductStore } from "@/stores/useAddedProductStore";
import { useCartStore } from "@/stores/useCartStore";
import type { ProductCartSchema } from "@/validations/schemas";
import { toast } from "sonner";

/* Custom hook que adiciona um produto ao carrinho com o método addProduct do useCartStore,
e que também ativa o state addedProduct */
export const useAddProduct = () => {
  const { addProduct, counter } = useCartStore();
  const { setAddedProduct } = useAddedProductStore();

  const execute = (item: ProductCartSchema) => {
    if (counter() === 100) {
      toast.error(
        "Seu carrinho atingiu o limite de 100 produtos. Finalize a compra para adicionar mais!",
        {
          style: {
            background: "#974947",
            color: "#fff",
            border: "1px solid #00000010",
          },
        },
      );
      return;
    }

    addProduct(item);
    setAddedProduct(item);
  };

  return execute;
};
