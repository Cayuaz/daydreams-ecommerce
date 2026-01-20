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
          className="absolute right-5 top-1/2 -translate-y-1/2 text-black/80 cursor-pointer"
          onClick={() => setTypeInput("password")}
        />
      )}
      {/*Se o tipo do input for password, mostra o olho riscado */}
      {typeInput === "password" && (
        <EyeOff
          className="absolute right-5 top-1/2 -translate-y-1/2 text-black/80 cursor-pointer"
          onClick={() => setTypeInput("text")}
        />
      )}
    </>
  );
};

export default Eyes;
