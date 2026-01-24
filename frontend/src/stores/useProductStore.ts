import type { ProductSchema } from "@/validations/schemas";
import { create } from "zustand";

type ProductStore = {
  product: ProductSchema | null;
  setProduct: (newProduct: ProductSchema | null) => void;
};

/* Esse state vai ser ativado quando o botão de comprar de dispotivos maiores 640px for ativado, 
ele será usado para exibir um componente que irá mostrar as opções de tamanho do produto e assim o usuário conseguir adicionar no carrinho */
export const useProductStore = create<ProductStore>((set) => ({
  product: null,
  setProduct: (newProduct) => set({ product: newProduct }),
}));
