import z from "zod";

const userSchema = z.object({
  name: z.string().min(3).max(60),
  lastname: z.string().min(3).max(100),
  email: z.email(),
  password: z.string().min(5).max(200),
});

export { userSchema };
