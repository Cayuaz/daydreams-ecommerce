import { CircleUser, Handbag } from "lucide-react";
import { HeaderMobileMenu } from "./MenuMobile";
import SearchBarMobile from "./SearchBarMobile";

const HeaderMobile = () => {
  return (
    <div className="sm:hidden flex w-full justify-between items-center px-8">
      <div className="flex items-center gap-4">
        <HeaderMobileMenu />
        <SearchBarMobile />
      </div>
      <img
        src="../../../public/logo.svg"
        alt="Daydreams logo"
        className="w-50 h-30 mt-6"
      />
      <div className="flex items-center gap-4">
        <CircleUser className="hover:text-(--secondary-color) cursor-pointer" />
        <Handbag className="hover:text-(--secondary-color) cursor-pointer" />
      </div>
    </div>
  );
};

export default HeaderMobile;
