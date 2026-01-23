import Button from "@/Components/Button";
import CartProducts from "@/Components/cart/ProductsCart";
import { useCartStore } from "@/stores/useCartStore";
import { CircleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Component = () => {
  const navigate = useNavigate();
  const { Cart } = useCartStore();

  return (
    <div className="my-10 flex flex-col gap-8 w-full ">
      <h1
        className="w-fit border-b-2 border-black text-base lg:text-lg xl:text-xl ml-8"
        onClick={() => console.log(Cart)}
      >
        Carrinho
      </h1>
      {/* <span className="text-left text-sm">Dados pessoais</span> */}

      {Cart.length === 0 && (
        <div className="border border-gray-500 rounded-md py-6 px-4 flex gap-2 justify-center items-center text-sm text-black">
          <CircleAlert className="size-5" />
          <p>Seu carrinho está vazio!</p>
        </div>
      )}
      {Cart.length > 0 && <CartProducts />}
      <Button
        className="w-fit px-10"
        click={() => navigate("/")}
        padding="py-1 ml-8"
      >
        VOLTAR
      </Button>
    </div>
  );
};
