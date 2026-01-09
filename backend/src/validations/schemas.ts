import z from "zod";

const userSchema = z.object({
  name: z.string().min(3).max(60),
  lastname: z.string().min(3).max(100),
  email: z.email(),
  password: z.string().min(5).max(200),
});

const userLoginSchema = userSchema.pick({
  email: true,
  password: true,
});

type UserLoginSchema = z.infer<typeof userLoginSchema>;

export { userSchema, userLoginSchema, type UserLoginSchema };
