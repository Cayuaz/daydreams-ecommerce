import { User } from "../entities/User.js";
import type { IUserRepository, NewUser } from "./IUserRepository.js";
import { prisma } from "../lib/prisma.js";

export class UserRepository implements IUserRepository {
  //Busca um usuário pelo id (omite a senha)
  async getUser(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, lastname: true, email: true },
    });
  }
  //Busca um usuário pelo email
  async getUserByEmail(userEmail: string) {
    const userData = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!userData) return null;

    return new User(userData);
  }
  //Adiciona um novo usuário no banco de dados
  async createUser(user: NewUser) {
    return await prisma.user.create({
      data: user,
      select: { id: true, name: true, lastname: true, email: true },
    });
  }
}
