import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export const Header = () => {
  return (
    <header className="bg-(--primary-color) text-white w-full sticky top-0 z-10">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};
