import { Product } from "../entities/Product.js";
import { prisma } from "../lib/prisma.js";
import { normalizeSchema } from "../validations/schemas.js";
import type { IProductRepository } from "./IProductRepository.js";

//Mapeia a query string para palavras-chave relevantes
const getKeyWords = (query: string) => {
  const words = {
    camiseta: ["camiseta", "t-shirt", "camisa", "polo"],
    calca: ["calça", "pants", "jeans"],
    "jorts-shorts": ["bermuda", "shorts", "short", "jorts"],
    casacos: ["casaco", "moletom", "jacket", "hoodie"],
    acessorios: ["acessório", "touca", "boné", "meia"],
  };

  return words[query as keyof typeof words] || [query];
};

export class ProductRepository implements IProductRepository {
  //Retorna os 10 primeiros produtos que contenham a query no name (se a query estiver vazia retorna todos os produtos)
  //Pula os produtos conforme a página atual, se for a página for 2, vai pular 10
  async getProducts(query: string, pageSize: number, currentPage: number) {
    const normalizeQuery = normalizeSchema.parse(query);
    console.log(normalizeQuery);
    const keywords = getKeyWords(normalizeQuery);

    const productsData = await prisma.product.findMany({
      // Busca produtos que contenham as palavras-chave em seu nome (apenas se a query tiver um array de palavras-chave)
      // O or faz uma busca com cada palavra dentro do array retornado pelo getKeyWords
      where: {
        OR: keywords.map((keyword) => ({
          name: { contains: keyword, mode: "insensitive" },
        })),
        //O array das palavras-chave de casacos tem moletom, o que traz também calças na busca de casacos, por isso caso a query seja casacos os produtos não podem conter "Calça" no nome
        NOT:
          normalizeQuery === "casacos"
            ? { name: { contains: "Calça", mode: "insensitive" } }
            : {},
      },
      //Se pageNumber for 3, 3 - 1 = 2, 2 * 10 = 20, ou seja se cada página mostra 10 itens, na 3 ele pula os últimos 20 itens
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        imageUrl: true,
      },
    });
    // O total também considera as palavras-chave caso a query tenha um array de palavras-chave
    const total = await prisma.product.count({
      where: {
        OR: keywords.map((keyword) => ({
          name: { contains: keyword, mode: "insensitive" },
        })),
      },
    });

    const products = productsData.map((product) => new Product(product));
    const totalPages = Math.ceil(total / pageSize);

    return { products, totalPages };
  }
  //Busca um produto pelo ID
  async getProduct(productId: string) {
    const productData = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productData) return null;

    return new Product(productData);
  }
  //Busca os produtos em destaque
  async getFeaturedProducts() {
    const featuredProducts = await prisma.product.findMany({
      where: { isFeatured: true },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        imageUrl: true,
      },
    });

    return featuredProducts.map(
      (featuredProduct) => new Product(featuredProduct),
    );
  }
}
