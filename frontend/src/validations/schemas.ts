import z from "zod";

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  imageUrl: z.string(),
});

const productArraySchema = z.array(productSchema);

type ProductArraySchema = z.infer<typeof productArraySchema>;

export { productArraySchema, type ProductArraySchema };
