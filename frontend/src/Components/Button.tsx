import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`w-3/5 py-2 text-sm rounded-sm bg-[#222224] hover:bg-[#323235] text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
