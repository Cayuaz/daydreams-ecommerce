import { prisma } from "./lib/prisma.js";

try {
  await prisma.user.create({
    data: {
      name: "joao",
      lastname: "silva",
      email: "joao@gmail.com",
      password: "123",
    },
  });
} catch (error) {
  console.log(error);
}
