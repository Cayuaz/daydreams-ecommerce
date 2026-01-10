import type { Request, Response } from "express";
import type { GetProductsUseCase } from "../useCases/getProductsUseCase.js";
import type { GetProductUseCase } from "../useCases/getProduct.js";

export class GetProductsController {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  handle = async (req: Request, res: Response) => {
    //Se a query for undefined, por padrão ela será uma string vazia, assim todos os produtos serão retornados
    const query = req.query.search ? String(req.query.search) : "";
    //Se a page for undefined, por padrão ela será 1
    let page = Number(req.query.page) || 1;
    if (page < 1) page = 1;

    const result = await this.getProductsUseCase.execute(query, page);
    return res.json(result);
  };
}

export class GetProductController {
  constructor(private getProductUseCase: GetProductUseCase) {}

  handle = async (id: string) => {
    return await this.getProductUseCase.execute(id);
  };
}
