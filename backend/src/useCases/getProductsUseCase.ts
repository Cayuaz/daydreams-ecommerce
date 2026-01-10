import type { ProductRepository } from "../repositories/ProductRepository.js";

export class GetProductsUseCase {
  constructor(private repository: ProductRepository) {}

  async execute(query: string, currentPage: number) {
    const pageSize = 10;

    return await this.repository.GetProducts(query, pageSize, currentPage);
  }
}
