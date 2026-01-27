import { CircleUserIcon } from "lucide-react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cart/CartIcon";

const HeaderDesktop = () => {
  const navigate = useNavigate();

  return (
    <div className="items-center hidden sm:flex sm:flex-col w-full px-8 lg:px-15 py-4 lg:mx-auto">
      {/* Menu e Barra de pesquisa */}
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 items-center mx-auto w-full">
        {/* Logo daydreams */}
        <img
          src="/logo-v4.svg"
          alt="Daydreams logo"
          className="w-30 h-30"
          onClick={() => navigate("/")}
        />

        {/* Barra de pesquisa */}
        <SearchBar
          className="border text-black bg-white"
          inputTextColor="text-black"
        />

        {/* Informações da conta/perfil e Carrinho de compras */}
        <div className="flex gap-3 justify-end">
          <CircleUserIcon
            className="hover:text-(--secondary-color) transition-colors"
            onClick={() => navigate("/profile")}
          />
          <CartIcon />
        </div>
      </div>
      {/*Navbar: Home, Sobre e Produtos */}
      <Navbar />
    </div>
  );
};

export default HeaderDesktop;
