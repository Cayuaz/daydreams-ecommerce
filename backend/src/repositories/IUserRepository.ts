import type { User } from "../entities/User.js";

//Interface para tipar o retorno de getUser (a class não pode ser usada, pois ela consideraria a senha do usuário)
export interface PublicUserData {
  id: string;
  name: string;
  lastname: string;
  email: string;
}

//Interface para tipar o objetto com os dados do novo usuário
export interface NewUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

interface IUserRepository {
  getUser: (id: string) => Promise<null | PublicUserData>;
  getUserByEmail: (userEmail: string) => Promise<null | User>;
  createUser: (user: NewUser) => Promise<PublicUserData>;
}

export type { IUserRepository };
