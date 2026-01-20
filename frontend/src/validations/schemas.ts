import z from "zod";

// Schema de produto
const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  imageUrl: z.string(),
});

// Schema de array de produtos
const productArraySchema = z.array(productSchema);

// Schema de produtos com total de páginas
const productsAndTotalSchema = z.object({
  products: productArraySchema,
  totalPages: z.number(),
});

// Schema de login
const loginSchema = z.object({
  email: z.email().trim(),
  password: z.string(),
});

// Schema de resposta de login
const loginResponseSchema = z.object({
  userId: z.string(),
  token: z.string(),
});

// Types
type ProductSchema = z.infer<typeof productSchema>;
type ProductArraySchema = z.infer<typeof productArraySchema>;
type ProductsAndTotalSchema = z.infer<typeof productsAndTotalSchema>;

export {
  productSchema,
  productArraySchema,
  productsAndTotalSchema,
  loginSchema,
  loginResponseSchema,
  type ProductArraySchema,
  type ProductSchema,
  type ProductsAndTotalSchema,
};
