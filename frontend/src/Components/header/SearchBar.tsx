import { Form } from "react-router-dom";
import { Search, X } from "lucide-react";
import { useRef, useState } from "react";

type SearchBarProps = {
  setOpen?: (open: boolean) => void;
  className: string;
  inputTextColor: string;
};

const SearchBar = ({ setOpen, className, inputTextColor }: SearchBarProps) => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Função para limpar o input e focar nele
  const handleInputClick = () => {
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <Form
      method="get"
      action="/products/page/1"
      className={`flex gap-4 w-5/6 sm:w-full lg:w-4/6 mx-auto items-center ${className} py-2 px-2 rounded-lg relative`}
      onSubmit={() => setOpen!(false)}
    >
      {/* Ícone da lupa  */}
      <button type="submit">
        <Search className="w-5 text-[#545457]" />
      </button>
      <input
        type="text"
        name="q"
        placeholder="O que você está buscando?"
        value={input}
        className={`outline-0 w-full text-left text-sm lg:text-base ${inputTextColor} `}
        onChange={(e) => setInput(e.target.value)}
        required
        ref={inputRef}
      />
      {/* Ícone de x com evento que apaga tudo o que foi digitado na barra de pesquisa */}
      {input && (
        <X
          className="absolute bottom-1/2 translate-1/2 right-5 size-4 text-[#545457] cursor-pointer"
          onClick={handleInputClick}
        />
      )}
    </Form>
  );
};

export default SearchBar;
