import { HandbagIcon, CircleUserIcon, SearchIcon } from "lucide-react";
import Navbar from "./Navbar";

const HeaderDesktop = () => {
  return (
    <div className="items-center hidden sm:flex sm:flex-col w-full px-8 py-4">
      {/*COntainer com a logo, barra de pesquisa e ícones */}
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 items-center mx-auto w-full">
        <img
          src="../../../logo.svg"
          alt="Daydreams logo"
          className="w-40 h-30"
        />

        <div className="flex gap-4 w-full mx-auto items-center bg-white text-[#222224] py-2 px-4 rounded-lg">
          <SearchIcon className="w-5" />
          <input
            type="text"
            placeholder="O que você está buscando?"
            className="outline-0 w-full text-center text-sm lg:text-base"
          />
        </div>

        <div className="flex gap-3 justify-end">
          <CircleUserIcon />
          <HandbagIcon />
        </div>
      </div>
      {/*Navbar: Home, Sobre e Produtos */}
      <Navbar />
    </div>
  );
};

export default HeaderDesktop;
