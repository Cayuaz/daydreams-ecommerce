import { Product } from "../entities/Product.js";
import { prisma } from "../lib/prisma.js";
import type { IProductRepository } from "./IProductRepository.js";

export class ProductRepository implements IProductRepository {
  //Retorna os 10 primeiros produtos que contenham a query no name (se a query estiver vazia retorna todos os produtos)
  //Pula os produtos conforme a página atual, se for a página for 2, vai pular 10
  async getProducts(search: string, pageSize: number, currentPage: number) {
    const productsData = await prisma.product.findMany({
      where: { name: { contains: search, mode: "insensitive" } },
      //Se pageNumber for 3, 3 - 1 = 2, 2 * 10 = 20, ou seja se cada página mostra 10 itens, na 3 ele pula os últimos 20 itens
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
    const total = await prisma.product.count({
      where: { name: { contains: search, mode: "insensitive" } },
    });

    const products = productsData.map((product) => new Product(product));

    return { products, total };
  }
  //Busca um produto pelo ID
  async getProduct(productId: string) {
    const productData = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productData) return null;

    return new Product(productData);
  }
}
