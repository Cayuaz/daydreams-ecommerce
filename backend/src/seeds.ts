import { prisma } from "./lib/prisma.js";

// try {
//   await prisma.user.create({
//     data: {
//       name: "joao",
//       lastname: "silva",
//       email: "joao@gmail.com",
//       password: "123",
//     },
//   });
// } catch (error) {
//   console.log(error);
// }

try {
  await prisma.product.createMany({
    data: [
      {
        name: "camiseta",
        price: 122.99,
        description: "lorem ipsum",
        image: "teste",
      },
      {
        name: "calça",
        price: 322.99,
        description: "lorem ipsum",
        image: "teste",
      },
      {
        name: "meia",
        price: 22.99,
        description: "lorem ipsum",
        image: "teste",
      },
      {
        name: "boné",
        price: 62.99,
        description: "lorem ipsum",
        image: "teste",
      },
    ],
  });
} catch (error) {
  console.log(error);
}
