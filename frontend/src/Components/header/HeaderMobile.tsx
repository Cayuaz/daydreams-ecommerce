import { CircleUser } from "lucide-react";
import { HeaderMobileMenu } from "./MenuMobile";
import SearchBarMobile from "./SearchBarMobile";
import { useNavigate } from "react-router-dom";
import CartIcon from "../cart/CartIcon";

const HeaderMobile = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:hidden flex w-full justify-between items-center px-8">
      <div className="flex items-center gap-2">
        <HeaderMobileMenu />
        <SearchBarMobile />
      </div>
      <img src="/logo-v4.svg" alt="Daydreams logo" className="w-30 h-30" />
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
