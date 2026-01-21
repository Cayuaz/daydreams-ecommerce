import Button from "@/Components/Button";
import { CircleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Component = () => {
  const navigate = useNavigate();

  const arr = [];

  return (
    <div className="my-10 flex flex-col gap-8 w-full px-8 sm:w-4/5 lg:w-3/5 mx-auto">
      <h1 className="w-fit border-b-2 border-black text-base lg:text-lg xl:text-xl">
        Carrinho
      </h1>
      {/* <span className="text-left text-sm">Dados pessoais</span> */}

      {arr.length === 0 && (
        <div className="border border-gray-500 rounded-md py-6 px-4 flex flex-col items-center">
          <div className="flex gap-2 items-center text-sm text-black">
            <CircleAlert className="size-5" />
            <p>Seu carrinho está vazio!</p>
          </div>
        </div>
      )}
      <Button
        className="w-fit px-10"
        click={() => navigate("/")}
        padding="py-1"
      >
        VOLTAR
      </Button>
    </div>
  );
};
