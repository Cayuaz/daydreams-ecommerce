import type { IUserRepository } from "../repositories/IUserRepository.js";

export class GetUserUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(id: string) {
    const user = await this.repository.getUser(id);

    if (!user) throw new Error("Usuário não encontrado.");

    return user;
  }
}
