import {
  HandbagIcon,
  CircleUserIcon,
  SearchIcon,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderDesktop = () => {
  const [rotate, setRotate] = useState(true);

  const handleRotate = () => {
    return rotate ? setRotate(false) : setRotate(true);
  };

  return (
    <div className="items-center hidden sm:flex sm:flex-col w-full px-8 py-4">
      {/*COntainer com a logo, barra de pesquisa e ícones */}
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-6 items-center mx-auto w-full">
        <img
          src="../../../public/logo.svg"
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
      <nav>
        <ul className="flex gap-7 text-base">
          <li className="">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-b-white hover:border-b-[#974947]"
                    : "text-white"
                } hover:text-[#974947] transition-colors duration-300 ease-in-out`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-[#974947]">
            <NavLink
              to={"/sobre"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-b-white hover:border-b-[#974947]"
                    : "text-white"
                } hover:text-[#974947] transition-colors duration-300 ease-in-out`
              }
            >
              Sobre
            </NavLink>
          </li>
          <li className="relative">
            <div className="flex gap-1 group">
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 border-b-white group-hover:border-b-[#974947]"
                      : "text-white"
                  } group-hover:text-[#974947] transition-colors duration-300 ease-in-out`
                }
              >
                <span>Produtos</span>
              </NavLink>
              <ChevronDown
                onClick={handleRotate}
                className={`transition-transform, duration-300 ease-in-out, ${
                  rotate ? "rotate-180" : "rotate-0"
                } group-hover:text-[#974947]`}
              />
            </div>

            {/*Menu de produtos */}
            {rotate && (
              <div className="absolute top-8 left-0 flex flex-col gap-4 bg-[#222224] border border-[#FFFFFF]/40 px-3 py-4 w-45 rounded-lg text-base items-start">
                <Link
                  to={"/search/products/all"}
                  className="hover:text-[#974947]"
                >
                  All
                </Link>
                <Link
                  to={"/search/products/camisetas"}
                  className="hover:text-[#974947]"
                >
                  Camisetas
                </Link>
                <Link
                  to={"/search/products/calças"}
                  className="hover:text-[#974947]"
                >
                  Calças
                </Link>
                <Link
                  to={"/search/products/bermuda-shorts"}
                  className="hover:text-[#974947]"
                >
                  Bermuda e Shorts
                </Link>
                <Link
                  to={"/search/products/casacos"}
                  className="hover:text-[#974947]"
                >
                  Casacos
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
