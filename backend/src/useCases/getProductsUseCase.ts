import type { IProductRepository } from "../repositories/IProductRepository.js";

export class GetProductsUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(query: string, currentPage: number) {
    const pageSize = 12;
    return await this.repository.getProducts(query, pageSize, currentPage);
  }
}
