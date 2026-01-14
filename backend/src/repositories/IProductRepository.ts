import type { Product } from "../entities/Product.js";

type ProductsAndTotal = { products: Product[]; total: number };

export interface IProductRepository {
  getProducts: (
    search: string,
    pageSize: number,
    currentPage: number
  ) => Promise<ProductsAndTotal>;
  getProduct: (id: string) => Promise<Product | null>;
  getFeaturedProducts: () => Promise<Product[]>;
}
