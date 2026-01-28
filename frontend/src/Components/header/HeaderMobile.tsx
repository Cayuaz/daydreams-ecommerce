import { CircleUser } from "lucide-react";
import { HeaderMobileMenu } from "./MenuMobile";
import SearchBarMobile from "./SearchBarMobile";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cart/CartIcon";

const HeaderMobile = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:hidden flex w-full justify-between items-center px-6">
      {/* Menu e Barra de pesquisa */}
      <div className="flex items-center gap-2">
        <HeaderMobileMenu />
        <SearchBarMobile />
      </div>
      {/* Logo daydreams */}
      <img
        src="/logo-v4.svg"
        alt="Daydreams logo"
        className="w-30 h-30"
        onClick={() => navigate("/")}
      />
      {/* Informações da conta/perfil e Carrinho de compras */}
      <div className="flex items-center gap-2">
        <CircleUser
          className="hover:text-(--secondary-color) cursor-pointer"
          onClick={() => navigate("/profile")}
        />
        <CartIcon />
      </div>
    </div>
  );
};

export default HeaderMobile;
