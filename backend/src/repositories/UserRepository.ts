import { User } from "../entities/User.js";
import type { IUserRepository } from "./IUserRepository.js";
import { prisma } from "../lib/prisma.js";

export class UserRepository implements IUserRepository {
  //Busca um usuário pelo id (omite a senha)
  async getUser(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, lastname: true, email: true },
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
}
