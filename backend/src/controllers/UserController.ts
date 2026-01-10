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

    return res.json(user);
  };
}
