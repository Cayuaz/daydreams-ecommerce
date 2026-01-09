import type { UserRepository } from "../repositories/UserRepository.js";
import { userLoginSchema } from "../validations/schemas.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginUseCase {
  constructor(private repository: UserRepository) {}
  async execute(userLogin: unknown) {
    //Verifica se os dados para login estão corretos
    const { success, data } = userLoginSchema.safeParse(userLogin);

    if (!success) throw new Error("Dados incompletos ou incorretos.");

    //Utiliza o email do login para pegar os dados do usuário
    const userDb = await this.repository.getUserByEmail(data.email);

    if (!userDb) throw new Error("Usuário não encontrado.");

    //Compara a senha do login com a senha do banco de dados
    const isPasswordCorrect = await bcrypt.compare(
      data.password,
      userDb.props.password
    );

    if (!isPasswordCorrect) throw new Error("Senha incorreta.");

    //Gera o token
    const token = jwt.sign(
      {
        id: userDb.props.id,
        name: userDb.props.name,
        lastname: userDb.props.lastname,
      },
      process.env.SECRET
    );

    return { userId: userDb.props.id, token };
  }
}
