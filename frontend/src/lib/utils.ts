import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formPrice = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const getCategoryTitle = (category: string) => {
  if (category === "camisetas") return "Camisetas";
  if (category === "calcas") return "Calças";
  if (category === "jorts-shorts") return "Bermuda e Shorts";
  if (category === "casacos") return "Casacos";
  if (category === "acessorios") return "Acessórios";
  return "Produtos";
};
