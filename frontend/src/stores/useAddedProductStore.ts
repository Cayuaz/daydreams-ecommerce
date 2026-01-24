import type { ProductCartSchema } from "@/validations/schemas";
import { create } from "zustand";

type AddedProductStore = {
  addedProduct: ProductCartSchema | null;
  setAddedProduct: (newItem: ProductCartSchema | null) => void;
};

/* Esse state vai ser ativado quando um produto for adicionado ao carrinho, 
para exibir um componente que irá dar um feedback ao usuário avisando que o item foi adicionado */
export const useAddedProductStore = create<AddedProductStore>((set) => ({
  addedProduct: null,
  setAddedProduct: (newItem) => set({ addedProduct: newItem }),
}));
