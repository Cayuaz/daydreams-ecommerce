import { NavLink } from "react-router-dom";
import MenuDesktop from "./MenuDesktop";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    return rotate ? setRotate(false) : setRotate(true);
  };

  //verifica a largura da tela e muda o rotate para false caso a tela seja menor que 640px
  //Isso evita que o menu de produtos permaneça aberto mesmo depois da tela diminuir
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth < 640) {
        setRotate(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickSection = () => setRotate(false);

  return (
    <nav>
      <ul className="flex gap-7 text-base">
        <li className="">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "underline" : "text-white"
              } hover:text-[#974947] transition-colors duration-300 ease-in-out`
            }
            onClick={handleClickSection}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-[#974947]">
          <NavLink
            to={"/About"}
            className={({ isActive }) =>
              `${
                isActive ? "underline" : "text-white"
              } hover:text-[#974947] transition-colors duration-300 ease-in-out`
            }
            onClick={handleClickSection}
          >
            Sobre
          </NavLink>
        </li>
        <li className="relative">
          <div className="flex items-center gap-1 group">
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive ? "underline" : "text-white"
                } group-hover:text-[#974947] transition-colors duration-300 ease-in-out`
              }
              onClick={handleClickSection}
            >
              Produtos
            </NavLink>
            <ChevronDown
              className={`transition-transform, duration-300 ease-in-out, ${
                rotate ? "rotate-180" : "rotate-0"
              } group-hover:text-[#974947] size-5`}
              onClick={handleRotate}
            />
          </div>

          {/*Menu de produtos */}
          {rotate && <MenuDesktop />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
