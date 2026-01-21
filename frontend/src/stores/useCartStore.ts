import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type ProductCartSchema } from "@/validations/schemas";

type CartStore = {
  Cart: ProductCartSchema[];
  addItem: (item: ProductCartSchema) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      Cart: [],
      //Método para adicionar produtos/itens no carrinho de compras
      addItem: (item) => set((state) => ({ Cart: [...state.Cart, item] })),
    }),
    { name: "Shopping cart" },
  ),
);
