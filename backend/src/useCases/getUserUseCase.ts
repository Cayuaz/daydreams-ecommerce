import { AppError } from "../middlewares/errors.js";
import type { IUserRepository } from "../repositories/IUserRepository.js";

export class GetUserUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(id: string) {
    const user = await this.repository.getUser(id);

    if (!user) throw new AppError("Usuário não encontrado.", 404);

    return user;
  }
}
