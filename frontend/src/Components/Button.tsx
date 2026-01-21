import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  click?: () => void;
  padding?: string;
};

const Button = ({
  children,
  className,
  disabled,
  type,
  click,
  padding,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`w-3/5 ${padding || "py-2"} text-sm rounded-sm bg-[#222224] hover:bg-[#323235] text-white transition-colors ${className} disabled:opacity-50`}
      disabled={disabled}
      onClick={() => click && click()}
    >
      {children}
    </button>
  );
};

export default Button;
