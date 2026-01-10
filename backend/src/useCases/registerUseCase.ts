import type { IUserRepository } from "../repositories/IUserRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userSchema } from "../validations/schemas.js";
import { AppError } from "../middlewares/errors.js";

export class RegisterUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(userData: unknown) {
    //Verifica se os dados para a criação do novo usuário estão corretos
    const { success, data } = userSchema.safeParse(userData);

    if (!success) throw new AppError("Dados incompletos ou incorretos.");

    //Verifica se existe um usuário com o email utilizado
    const user = await this.repository.getUserByEmail(data.email);

    if (user)
      throw new AppError("O email em questão já está sendo utilizado.", 409);

    //Criptografa a senha do usuário
    const encryptedPassword = await bcrypt.hash(data.password, 12);
    const encryptedData = { ...data, password: encryptedPassword };
    const newUser = await this.repository.createUser(encryptedData);

    //Se não acontecer nenhum erro, cria o token e coloca alguns dados do usuário nele
    const token = jwt.sign(
      { id: newUser.id, name: newUser.name, lastname: newUser.lastname },
      process.env.SECRET
    );

    return { userId: newUser.id, token };
  }
}
