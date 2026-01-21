import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  type ActionFunctionArgs,
} from "react-router-dom";
import Eyes from "@/Components/Eyes";
import Button from "@/Components/Button";
import { authResponseSchema, registerSchema } from "@/validations/schemas";
import FormErrorMsg from "@/Components/FormErrorMsg";
import { axiosInstance } from "@/lib/axios";

export const action = async ({ request }: ActionFunctionArgs) => {
  //Dados do formulário
  const formData = await request.formData();
  const name = formData.get("name");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const password = formData.get("password");

  const { success, data } = registerSchema.safeParse({
    name,
    lastname,
    email,
    password,
  });

  if (!success) return false;

  try {
    const response = await axiosInstance.post("/auth/register", data, {
      signal: request.signal,
    });

    //Verificação da resposta do registro
    const {
      success: respSuccess,
      data: respData,
      error: respError,
    } = authResponseSchema.safeParse(response);

    if (!respSuccess) {
      console.log("Falha na validação da resposta do registro!");
      console.log(respError);
      return false;
    }

    //Se a resposta for válida, salvar o token e redirecionar para a página inicial
    localStorage.setItem("token", respData.token);
    localStorage.setItem("userId", respData.userId);

    return redirect("/");
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const Component = () => {
  const action = useActionData() as boolean;
  const [typeInput, setTypeInput] = useState("password");

  return (
    <div className="my-15 flex flex-col gap-8">
      <h1 className="text-base lg:text-lg xl:text-xl">Criar conta</h1>
      <Form className="px-8 flex flex-col gap-8 items-center" method="post">
        {/* Nome */}
        <div className="flex flex-col gap-2 w-full sm:w-3/5">
          <label htmlFor="name" className="text-left text-sm lg:text-base">
            NOME:
          </label>
          <input
            type="text"
            name="name"
            placeholder="João"
            id="name"
            className="border border-gray-500 py-2 px-4 rounded-sm focus:outline-2 focus:outline-black text-sm lg:text-base"
            minLength={3}
            maxLength={60}
            required
          />
        </div>
        {/* Sobrenome */}
        <div className="flex flex-col gap-2 w-full sm:w-3/5">
          <label htmlFor="lastname" className="text-left text-sm lg:text-base">
            SOBRENOME:
          </label>
          <input
            type="text"
            name="lastname"
            placeholder="Pedro"
            id="lastname"
            className="border border-gray-500 py-2 px-4 rounded-sm focus:outline-2 focus:outline-black text-sm lg:text-base"
            minLength={3}
            maxLength={100}
            required
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-2 w-full sm:w-3/5">
          <label htmlFor="email" className="text-left text-sm lg:text-base">
            EMAIL:
          </label>
          <input
            type="text"
            name="email"
            placeholder="exemplo@gmail.com"
            id="email"
            className="border border-gray-500 py-2 px-4 rounded-sm focus:outline-2 focus:outline-black text-sm lg:text-base"
            minLength={3}
            required
          />
        </div>
        {/* Senha */}
        <div className="flex flex-col gap-2 w-full sm:w-3/5">
          <label htmlFor="password" className="text-left text-sm lg:text-base">
            PASSWORD:
          </label>
          <div className="border border-gray-500 rounded-sm relative">
            <input
              type={typeInput}
              name="password"
              placeholder="123456"
              id="password"
              className="w-full h-full focus:outline-2 focus:outline-black py-2 px-4 rounded-sm text-sm lg:text-base"
              minLength={5}
              required
            />
            <Eyes typeInput={typeInput} setTypeInput={setTypeInput} />
          </div>
        </div>
        {/* Mensagem de erro caso o login falhe */}
        {action === false && <FormErrorMsg />}
        <Button type="submit" className="w-full sm:w-3/5">
          CRIAR
        </Button>
      </Form>
    </div>
  );
};
