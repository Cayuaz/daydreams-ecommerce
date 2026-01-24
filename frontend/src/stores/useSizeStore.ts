import { create } from "zustand";

type SizeStore = {
  selectedSize: string | null;
  setSelectedSize: (newSize: string | null) => void;
};

//State do tamanho selecionado (P, M, G e GG)
export const useSizeStore = create<SizeStore>((set) => ({
  selectedSize: null,
  setSelectedSize: (newSize) => set({ selectedSize: newSize }),
}));
