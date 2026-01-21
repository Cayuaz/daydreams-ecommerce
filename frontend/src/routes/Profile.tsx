import Button from "@/Components/Button";
import { Skeleton } from "@/Components/ui/skeleton";
import { axiosInstance } from "@/lib/axios";
import { userSchema, type UserSchema } from "@/validations/schemas";
import { Suspense } from "react";
import {
  Await,
  redirect,
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router-dom";

export const loader = ({ request }: LoaderFunctionArgs) => {
  //Pega o token do localStorage
  const token = localStorage.getItem("token");

  //Verifica se o token existe, se não existir, redireciona para a página de login
  if (!token) return redirect("/auth/login");

  //Pega o ID do usuário do localStorage
  const id = localStorage.getItem("userId");

  console.log(id);

  //Busca os dados do usuário e envia com o token para autenticação
  const userPromise = axiosInstance
    .get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: request.signal,
    })
    .then((res) => {
      //Verificação dos dados do usuário
      const { success, data } = userSchema.safeParse(res);

      if (!success) {
        console.log("Falha na verificação dos dados do usuário!");
        return false;
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });

  return { user: userPromise };
};

export const Component = () => {
  const { user } = useLoaderData() as { user: UserSchema };
  const navigate = useNavigate();

  return (
    <div className="my-10 flex flex-col gap-8 w-full px-8 sm:w-4/5 lg:w-3/5 mx-auto">
      <h1 className="w-fit border-b-2 border-black text-base lg:text-lg xl:text-xl">
        Minha conta
      </h1>
      <span className="text-left text-sm">Dados pessoais</span>
      <Suspense
        fallback={<Skeleton className="h-32 w-full rounded-md bg-[#545457]" />}
      >
        <Await resolve={user}>
          {(resolvedUser) => (
            <>
              {resolvedUser && (
                <div className="flex flex-col justify-between border border-gray-500 rounded-md py-6 px-4 w-full ">
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-bold">Nome:</span>{" "}
                    <p className="text-sm">
                      {resolvedUser.name} {resolvedUser.lastname}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 mt-4">
                    <span className="font-bold">Email:</span>{" "}
                    <p className="text-sm">{resolvedUser.email}</p>
                  </div>
                  <div></div>
                </div>
              )}
              {!resolvedUser && (
                <div className="border border-black/30 w-full mx-auto rounded-sm px-4 py-5">
                  <h1 className="text-base sm:text-lg text-(--secondary-color) font-bold">
                    Ops nada por aqui!
                  </h1>
                  <p className="text-sm sm:text-base">
                    Não foi possível recuperar os seus dados no momento. Tente
                    novamente mais tarde.
                  </p>
                </div>
              )}
            </>
          )}
        </Await>
      </Suspense>
      <Button
        className="w-fit px-10"
        click={() => navigate("/")}
        padding="py-1"
      >
        VOLTAR
      </Button>
    </div>
  );
};
