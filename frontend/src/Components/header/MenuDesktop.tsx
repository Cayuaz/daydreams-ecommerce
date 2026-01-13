import { Link } from "react-router-dom";

const MenuDesktop = () => {
  return (
    <div className="absolute top-8 left-0 flex flex-col gap-4 bg-[#222224] border-2 border-[#FFFFFF] px-3 py-6 w-45 rounded-lg text-base items-start">
      <Link
        to={"/search/products/all"}
        className="hover:text-[#974947] transition-colors duration-300 ease-in-out"
      >
        All
      </Link>
      <Link
        to={"/search/products/camisetas"}
        className="hover:text-[#974947] transition-colors duration-300 ease-in-out"
      >
        Camisetas
      </Link>
      <Link
        to={"/search/products/calças"}
        className="hover:text-[#974947] transition-colors duration-300 ease-in-out"
      >
        Calças
      </Link>
      <Link
        to={"/search/products/bermuda-shorts"}
        className="hover:text-[#974947] transition-colors duration-300 ease-in-out"
      >
        Bermuda e Shorts
      </Link>
      <Link
        to={"/search/products/casacos"}
        className="hover:text-[#974947] transition-colors duration-300 ease-in-out"
      >
        Casacos
      </Link>
    </div>
  );
};

export default MenuDesktop;
