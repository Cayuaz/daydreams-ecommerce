import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const isLogged = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["authorization"];
  const token = header?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acesso negado. Token inexistente." });
  }

  try {
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token inválido." });
  }
};
