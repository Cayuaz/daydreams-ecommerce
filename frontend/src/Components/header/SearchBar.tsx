import { Form } from "react-router-dom";
import { Search } from "lucide-react";

type SearchBarProps = {
  setOpen?: (open: boolean) => void;
  className: string;
  inputText: string;
};

const SearchBar = ({ setOpen, className, inputText }: SearchBarProps) => {
  return (
    <Form
      method="get"
      action="/products/page/1"
      className={`flex gap-4 w-5/6 mx-auto items-center ${className} py-2 px-2 rounded-lg`}
      onSubmit={() => setOpen!(false)}
    >
      <button type="submit">
        <Search className="w-5" />
      </button>
      <input
        type="text"
        name="q"
        placeholder="O que você está buscando?"
        className={`outline-0 w-full text-left text-sm lg:text-base ${inputText} `}
        required
      />
    </Form>
  );
};

export default SearchBar;
