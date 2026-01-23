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
const authResponseSchema = z.object({
  userId: z.string(),
  token: z.string(),
});

// Schema de register
const registerSchema = z.object({
  name: z.string().min(3).max(60),
  lastname: z.string().min(3).max(100),
  email: z.email(),
  password: z.string().min(5).max(200),
});

// Schema de usuários
const userSchema = registerSchema
  .pick({ name: true, lastname: true, email: true })
  .extend({
    id: z.string(),
  });

// Schema de produtos do carrinho

const productCartSchema = productSchema
  .pick({
    id: true,
    name: true,
    price: true,
    description: true,
    imageUrl: true,
  })
  .extend({
    size: z.string().min(1).max(1),
    qtd: z.number().min(1),
  });

// Types
type ProductSchema = z.infer<typeof productSchema>;
type ProductArraySchema = z.infer<typeof productArraySchema>;
type ProductsAndTotalSchema = z.infer<typeof productsAndTotalSchema>;
type UserSchema = z.infer<typeof userSchema>;
type ProductCartSchema = z.infer<typeof productCartSchema>;

export {
  productSchema,
  productArraySchema,
  productsAndTotalSchema,
  loginSchema,
  authResponseSchema,
  registerSchema,
  userSchema,
  productCartSchema,
  type ProductArraySchema,
  type ProductSchema,
  type ProductsAndTotalSchema,
  type UserSchema,
  type ProductCartSchema,
};
