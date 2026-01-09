import type { Request, Response } from "express";
import type { RegisterUseCase } from "../useCases/registerUseCase.js";
import type { LoginUseCase } from "../useCases/loginUseCase.js";

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  handle = async (req: Request, res: Response) => {
    const userObj = await this.registerUseCase.execute(req.body);

    res.status(201).json(userObj);
  };
}

export class LoginController {
  constructor(private loginUserCase: LoginUseCase) {}

  handle = async (req: Request, res: Response) => {
    const token = await this.loginUserCase.execute(req.body);

    res.status(200).json(token);
  };
}
