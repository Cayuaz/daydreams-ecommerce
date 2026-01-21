import { Eye, EyeOff } from "lucide-react";

type EyeProps = {
  typeInput: string;
  setTypeInput: (type: string) => void;
};

const Eyes = ({ typeInput, setTypeInput }: EyeProps) => {
  return (
    <>
      {/*Se o tipo do input for text, mostra o olho aberto */}
      {typeInput === "text" && (
        <Eye
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black/80 cursor-pointer w-5 h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
          onClick={() => setTypeInput("password")}
        />
      )}
      {/*Se o tipo do input for password, mostra o olho riscado */}
      {typeInput === "password" && (
        <EyeOff
          className="absolute right-4 top-1/2 -translate-y-1/2 text-black/80 cursor-pointer w-5 h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
          onClick={() => setTypeInput("text")}
        />
      )}
    </>
  );
};

export default Eyes;
