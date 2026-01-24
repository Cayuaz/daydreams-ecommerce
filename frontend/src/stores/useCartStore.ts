import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type ProductCartSchema } from "@/validations/schemas";

type CartStore = {
  Cart: ProductCartSchema[];
  addProduct: (item: ProductCartSchema) => void;
  increment: (id: string, size: string) => void;
  decrement: (id: string, size: string) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      Cart: [],
      //Método para adicionar produtos/itens no carrinho de compras
      addProduct: (item) => {
        const Cart = get().Cart;
        //Verifica se o novo produto já está no carrinho
        const isItemExists = Cart.find(
          (product) => product.id === item.id && product.size === item.size,
        );

        console.log(isItemExists);

        //Se o produto já estiver no carrinho, atualiza a sua quantidade
        //Destaque para a verificação de tamanho: já que dois itens podem ter o mesmo id, mas serem de tamanhos diferentes
        if (isItemExists) {
          set((state) => ({
            Cart: state.Cart.map((product) =>
              product.id === item.id && product.size === item.size
                ? { ...product, qtd: isItemExists.qtd + 1 }
                : product,
            ),
          }));
          return;
        }

        set((state) => ({ Cart: [...state.Cart, { ...item, qtd: 1 }] }));
        return;
      },
      //Método para aumentar o quantidade de um produto
      increment: (id, size) =>
        set((state) => ({
          Cart: state.Cart.map((product) =>
            product.id === id && product.size === size
              ? { ...product, qtd: product.qtd + 1 }
              : product,
          ),
        })),
      //Método para diminuir a quantidade de um produto
      decrement: (id, size) =>
        set((state) => ({
          Cart: state.Cart.map((product) =>
            product.id === id && product.size === size
              ? { ...product, qtd: product.qtd - 1 }
              : product,
          ),
        })),
    }),
    { name: "Shopping cart" },
  ),
);
