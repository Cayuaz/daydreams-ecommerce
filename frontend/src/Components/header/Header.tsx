import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export const Header = () => {
  return (
    <header className="flex justify-center items-center bg-[#222224] text-white w-full">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};
