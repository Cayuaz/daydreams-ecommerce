import { HandbagIcon, CircleUserIcon, SearchIcon } from "lucide-react";
import Navbar from "./Navbar";
import { Form } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <div className="items-center hidden sm:flex sm:flex-col w-full px-8 py-4">
      {/*Container com a logo, barra de pesquisa e ícones */}
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 items-center mx-auto w-full">
        <img
          src="../../../logo.svg"
          alt="Daydreams logo"
          className="w-40 h-30"
        />

        <Form
          method="get"
          action="/products/page/1"
          className="flex gap-4 w-full mx-auto items-center bg-white text-black py-2 px-4 rounded-lg"
        >
          <button type="submit">
            <SearchIcon className="w-5" />
          </button>
          <input
            type="text"
            name="q"
            placeholder="O que você está buscando?"
            className="outline-0 w-full text-left text-sm lg:text-base"
          />
        </Form>

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
