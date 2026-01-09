import type { User } from "../entities/User.js";

//Interface para tipar o retorno de getUser (a class não pode ser usada, pois ela consideraria a senha do usuário)
export interface PublicUserData {
  name: string;
  lastname: string;
  email: string;
}

interface IUserRepository {
  getUser: (id: string) => Promise<null | PublicUserData>;
  getUserByEmail: (userEmail: string) => Promise<null | User>;
}

export type { IUserRepository };
