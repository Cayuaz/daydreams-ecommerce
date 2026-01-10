import type { Request, Response, NextFunction } from "express";

export class AppError {
  constructor(public readonly msg: string, public readonly statusCode = 400) {}
}

export const globalErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const msg = error.message;

  console.log(next);
  console.log(msg);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ error: error.msg });
  }

  return res.status(500).json({
    message: "Erro no servidor. Por favor tente novamente em outro momento.",
  });
};
