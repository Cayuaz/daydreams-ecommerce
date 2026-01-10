import { Product } from "../entities/Product.js";
import { prisma } from "../lib/prisma.js";
import type { IProductRepository } from "./IProductRepository.js";

export class ProductRepository implements IProductRepository {
  async GetProducts(search: string, pageSize: number, currentPage: number) {
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
}
