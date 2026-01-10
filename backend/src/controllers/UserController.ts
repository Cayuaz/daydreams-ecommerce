import type { Request, Response } from "express";
import type { GetUserUseCase } from "../useCases/getUserUseCase.js";

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    //Verifica se o ID existe
    if (!id) {
      return res.status(400).json({ message: "ID inválido ou inexistente." });
    }

    //Chama o método do getUserUseCase
    const user = await this.getUserUseCase.execute(id);

    // //Verifica se o usuário foi retornado com sucesso
    // if (!user) {
    //   return res.status(404).json({ error: "Usuário não encontrado." });
    // }

    return res.json(user);
  };
}
