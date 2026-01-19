import { Handbag } from "lucide-react";
import { HeaderMobileMenu } from "./MenuMobile";

const HeaderMobile = () => {
  return (
    <div className="sm:hidden flex w-full justify-between items-center px-8">
      <HeaderMobileMenu />
      <img
        src="../../../public/logo.svg"
        alt="Daydreams logo"
        className="w-50 h-30 mt-6"
      />
      <Handbag className="hover:text-(--secondary-color) cursor-pointer" />
    </div>
  );
};

export default HeaderMobile;
