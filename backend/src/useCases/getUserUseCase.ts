import type { IUserRepository } from "../repositories/IUserRepository.js";

export class GetUserUseCase {
  constructor(private repository: IUserRepository) {}
  async execute(id: string) {
    return await this.repository.getUser(id);
  }
}
