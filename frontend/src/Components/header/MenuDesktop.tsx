import { Link } from "react-router-dom";

type MenuDesktopProps = { rotate: () => void };

const MenuDesktop = ({ rotate }: MenuDesktopProps) => {
  return (
    <div className="absolute top-12 left-0 flex flex-col gap-4 bg-(--primary-color) shadow px-3 py-4 w-45 rounded-sm text-base items-start">
      {/* Todos os produtos */}
      <Link
        to={"/products/page/1"}
        className="hover:text-(--secondary-color) transition-colors duration-300 ease-in-out"
        onClick={() => rotate()}
      >
        All
      </Link>
      {/* Camisetas */}
      <Link
        to={"/products/category/camisetas/1"}
        className="hover:text-[#974947] transition-colors duration-300 ease-in-out"
        onClick={() => rotate()}
      >
        Camisetas
      </Link>
      {/* Calças */}
      <Link
        to={"/products/category/calcas/1"}
        className="hover:text-(--secondary-color) transition-colors duration-300 ease-in-out"
        onClick={() => rotate()}
      >
        Calças
      </Link>
      {/* Bermudas e Shorts */}
      <Link
        to={"/products/category/jorts-shorts/1"}
        className="hover:text-(--secondary-color) transition-colors duration-300 ease-in-out"
        onClick={() => rotate()}
      >
        Bermuda e Shorts
      </Link>
      {/* Casacos */}
      <Link
        to={"/products/category/casacos/1"}
        className="hover:text-(--secondary-color) transition-colors duration-300 ease-in-out"
        onClick={() => rotate()}
      >
        Casacos
      </Link>
      {/* Acessórios */}
      <Link
        to={"/products/category/acessorios/1"}
        className="hover:text-(--secondary-color) transition-colors duration-300 ease-in-out"
        onClick={() => rotate()}
      >
        Acessórios
      </Link>
    </div>
  );
};

export default MenuDesktop;
