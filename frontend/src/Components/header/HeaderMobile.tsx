import { Handbag, Menu } from "lucide-react";

const HeaderMobile = () => {
  return (
    <div className="sm:hidden flex w-full justify-between items-center px-8">
      <Menu />
      <img
        src="../../../public/logo.svg"
        alt="Daydreams logo"
        className="w-50 h-30 mt-6"
      />
      <Handbag />
    </div>
  );
};

export default HeaderMobile;
