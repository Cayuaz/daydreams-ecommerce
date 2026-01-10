import type { Product } from "../entities/Product.js";

type ProductsAndTotal = { products: Product[]; total: number };

export interface IProductRepository {
  GetProducts: (
    search: string,
    pageSize: number,
    currentPage: number
  ) => Promise<ProductsAndTotal>;
}
