import { Form } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <Form
      method="get"
      action="/products/page/1"
      className="flex gap-4 w-full mx-auto items-center bg-white text-black py-2 px-4 rounded-lg"
    >
      <button type="submit">
        <Search className="w-5" />
      </button>
      <input
        type="text"
        name="q"
        placeholder="O que você está buscando?"
        className="outline-0 w-full text-left text-sm lg:text-base"
      />
    </Form>
  );
};

export default SearchBar;
