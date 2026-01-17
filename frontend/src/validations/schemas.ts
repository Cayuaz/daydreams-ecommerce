import z from "zod";

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  imageUrl: z.string(),
});

const productArraySchema = z.array(productSchema);

const productsAndTotalSchema = z.object({
  products: productArraySchema,
  total: z.number(),
});

type ProductSchema = z.infer<typeof productSchema>;
type ProductArraySchema = z.infer<typeof productArraySchema>;
type ProductsAndTotalSchema = z.infer<typeof productsAndTotalSchema>;

export {
  productArraySchema,
  productsAndTotalSchema,
  type ProductArraySchema,
  type ProductSchema,
  type ProductsAndTotalSchema,
};
