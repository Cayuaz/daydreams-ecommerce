import type { Product } from "../entities/Product.js";

type ProductsAndTotal = { products: Product[]; totalPages: number };

export interface IProductRepository {
  getProducts: (
    query: string,
    pageSize: number,
    currentPage: number
  ) => Promise<ProductsAndTotal>;
  getProduct: (id: string) => Promise<Product | null>;
  getFeaturedProducts: () => Promise<Product[]>;
}
