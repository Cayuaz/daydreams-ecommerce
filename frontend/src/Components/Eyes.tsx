import { Eye, EyeClosed } from "lucide-react";

type EyeProps = {
  typeInput: string;
  setTypeInput: (type: string) => void;
};

const Eyes = ({ typeInput, setTypeInput }: EyeProps) => {
  return (
    <>
      {typeInput === "text" && (
        <Eye
          className="absolute right-5 top-1/2 -translate-y-1/2 text-black/80 cursor-pointer"
          onClick={() => setTypeInput("password")}
        />
      )}
      {typeInput === "password" && (
        <EyeClosed
          className="absolute right-5 top-1/2 -translate-y-1/2 text-black/80 cursor-pointer"
          onClick={() => setTypeInput("text")}
        />
      )}
    </>
  );
};

export default Eyes;
