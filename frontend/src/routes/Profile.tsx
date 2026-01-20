import { axiosInstance } from "@/lib/axios";
import { userSchema, type UserSchema } from "@/validations/schemas";
import { Suspense } from "react";
import {
  Await,
  redirect,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router-dom";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const token = localStorage.getItem("token");

  if (!token) return redirect("/auth/login");

  const id = localStorage.getItem("userId");

  console.log(id);

  const userPromise = axiosInstance
    .get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: request.signal,
    })
    .then((res) => {
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

  return (
    <div>
      <Suspense>
        <Await resolve={user}>
          {(resolvedUser) => resolvedUser && <p>{resolvedUser.name}</p>}
        </Await>
      </Suspense>
    </div>
  );
};
