import Button from "@/Components/Button";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
  type ActionFunctionArgs,
} from "react-router-dom";
import { useState } from "react";
import Eyes from "@/Components/Eyes";
import { authResponseSchema, loginSchema } from "@/validations/schemas";
import { axiosInstance } from "@/lib/axios";
import FormErrorMsg from "@/Components/FormErrorMsg";
import { Spinner } from "@/Components/ui/spinner";

export const action = async ({ request }: ActionFunctionArgs) => {
  //Dados do formulário
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  //Verificação dos dados do recebidos pelo formulário
  const { success, data, error } = loginSchema.safeParse({
    email,
    password,
  });

  if (!success) {
    console.log("Falha na validação do login!");
    console.log(error);
    return false;
  }

  try {
    //Envio da requisição de login
    const response = await axiosInstance.post("/auth/login", data, {
      signal: request.signal,
    });

    //Verificação da resposta do login
    const {
      success: respSuccess,
      data: respData,
      error: respError,
    } = authResponseSchema.safeParse(response);

    if (!respSuccess) {
      console.log("Falha na validação da resposta do login!");
      console.log(respError);
      return false;
    }

    //Se a resposta for válida, salvar o token e redirecionar para a página inicial
    localStorage.setItem("token", respData.token);
    localStorage.setItem("userId", respData.userId);

    return redirect("/profile");
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const Component = () => {
  const [typeInput, setTypeInput] = useState("password");
  const action = useActionData() as boolean;
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  return (
    <div className="my-15 flex flex-col gap-8">
      <h1 className="text-base lg:text-lg xl:text-xl">Login</h1>
      <Form className="px-8 flex flex-col gap-8 items-center" method="post">
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
            minLength={3}
            className="border border-gray-500 py-2 px-4 rounded-sm focus:outline-2 focus:outline-black text-sm lg:text-base"
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
              minLength={5}
              className="w-full h-full focus:outline-2 focus:outline-black py-2 px-4 rounded-sm text-sm lg:text-base"
              required
            />
            <Eyes typeInput={typeInput} setTypeInput={setTypeInput} />
          </div>
        </div>
        {/* Mensagem de erro caso o login falhe */}
        {action === false && <FormErrorMsg />}
        {/* Carrega o componente spinner do shadcn quando o formulário está sendo enviado */}
        <Button type="submit" className="w-full sm:w-3/5">
          {!isLoading && <span>Login</span>}
          {isLoading && (
            <div className="flex justify-center gap-2">
              <Spinner className="size-5" />
              <span>Carregando</span>
            </div>
          )}
        </Button>
      </Form>
      {/*Link para a página de registro */}
      <span className="flex items-center mx-auto gap-2 border-b border-b-black text-sm lg:text-base pb-1">
        Não tem uma conta? <Link to={"/auth/register"}>Criar conta</Link>
      </span>
    </div>
  );
};
