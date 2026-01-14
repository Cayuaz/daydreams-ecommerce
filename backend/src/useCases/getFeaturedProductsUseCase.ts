import type { IProductRepository } from "../repositories/IProductRepository.js";

export class GetFeaturedProductsUseCase {
  constructor(private repository: IProductRepository) {}
  async execute() {
    return await this.repository.getFeaturedProducts();
  }
}
