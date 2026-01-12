import { HandbagIcon, CircleUserIcon, SearchIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <div className="items-center hidden sm:flex sm:flex-col w-full px-6 py-4">
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 items-center mx-auto w-full">
        <img
          src="../../../public/daydreams-logo.png"
          alt="Daydreams logo"
          className="w-32"
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
      <nav>
        <ul className="flex gap-6 font-semibold uppercase">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/Sobre"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Produtos</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
