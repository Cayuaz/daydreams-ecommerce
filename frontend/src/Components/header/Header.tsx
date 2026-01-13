import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export const Header = () => {
  return (
    <header className="bg-[#222224] text-white w-full sticky top-0">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};
