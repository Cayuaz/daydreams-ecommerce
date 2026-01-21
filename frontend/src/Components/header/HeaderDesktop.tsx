import { HandbagIcon, CircleUserIcon } from "lucide-react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const HeaderDesktop = () => {
  const navigate = useNavigate();

  return (
    <div className="items-center hidden sm:flex sm:flex-col w-full px-8 py-4">
      {/*Container com a logo, barra de pesquisa e ícones */}
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 items-center mx-auto w-full">
        <img
          src="../../../logo.svg"
          alt="Daydreams logo"
          className="w-40 h-30"
        />

        <SearchBar
          className="border text-black bg-white"
          inputTextColor="text-black"
        />

        <div className="flex gap-3 justify-end">
          <CircleUserIcon onClick={() => navigate("/profile")} />
          <HandbagIcon onClick={() => navigate("/shop-cart")} />
        </div>
      </div>
      {/*Navbar: Home, Sobre e Produtos */}
      <Navbar />
    </div>
  );
};

export default HeaderDesktop;
