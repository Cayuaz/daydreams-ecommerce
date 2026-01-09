import type { Request, Response } from "express";
import type { RegisterUseCase } from "../useCases/registerUseCase.js";

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  handle = async (req: Request, res: Response) => {
    const userObj = await this.registerUseCase.execute(req.body);

    res.status(201).json(userObj);
  };
}
