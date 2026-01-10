import { AppError } from "../middlewares/errors.js";
import type { IProductRepository } from "../repositories/IProductRepository.js";

export class GetProductUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(id: string) {
    const product = await this.repository.getProduct(id);

    if (!product) throw new AppError("Produto não encontrado.", 404);

    return product;
  }
}
