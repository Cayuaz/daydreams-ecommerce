import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[url(/banner.jpg)] w-full aspect-video bg-cover bg-center flex flex-col items-center justify-center">
      <Link
        to={"/products"}
        className="text-white text-sm sm:text-base lg:text-lg border-2 border-white py-2 px-8 lg:px-10 hover:bg-white/20 transition-colors ease-in-out duration-300"
      >
        Comprar
      </Link>
    </div>
  );
};

export default Banner;
