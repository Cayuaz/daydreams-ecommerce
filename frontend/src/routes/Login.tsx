import Button from "@/Components/Button";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
import Eyes from "@/Components/Eyes";

export const Component = () => {
  const [typeInput, setTypeInput] = useState("password");

  return (
    <div className="my-15 flex flex-col gap-8">
      <h1 className="text-base xl:text-xl">Login</h1>
      <Form className="px-8 flex flex-col gap-8 items-center" method="post">
        {/* Email */}
        <div className="flex flex-col gap-2 w-full sm:w-3/5">
          <label htmlFor="email" className="text-left">
            EMAIL:
          </label>
          <input
            type="text"
            name="email"
            placeholder="exemplo@gmail.com"
            id="email"
            className="border border-gray-500 py-4 px-4 rounded-sm focus:outline-2 focus:outline-black"
            required
          />
        </div>
        {/* Senha */}
        <div className="flex flex-col gap-2 w-full sm:w-3/5">
          <label htmlFor="password" className="text-left">
            PASSWORD:
          </label>
          <div className="border border-gray-500 rounded-sm relative">
            <input
              type={typeInput}
              name="password"
              placeholder="123456"
              id="password"
              className="w-full h-full focus:outline-2 focus:outline-black py-4 px-4 rounded-sm"
              required
            />
            <Eyes typeInput={typeInput} setTypeInput={setTypeInput} />
          </div>
        </div>
        <Button className="w-full sm:w-3/5">LOGIN</Button>
      </Form>
      <span className="flex items-center mx-auto gap-2 border-b border-b-black">
        Não tem uma conta? <Link to={"/auth/register"}>Criar conta</Link>
      </span>
    </div>
  );
};
