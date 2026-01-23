import type { ProductSchema } from "@/validations/schemas";
import { create } from "zustand";

type ProductStore = {
  product: ProductSchema | null;
  setProduct: (newProduct: ProductSchema | null) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  product: null,
  setProduct: (newProduct) => set({ product: newProduct }),
}));
