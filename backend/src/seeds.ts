// import { Decimal } from "decimal.js";
// import { prisma } from "./lib/prisma.js";

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

// try {
//   await prisma.product.createMany({
//     data: [
//       {
//         name: "Camiseta System",
//         price: new Decimal(350),
//         description:
//           'Camiseta oversized na cor preta, confeccionada em malha 100% algodão, com gramatura de 240g/m². Contém estampa frontal "System Glitch" em silk digital de alta definição e gola reforçada.',
//         imageUrl: "/camiseta-system.png",
//         isFeatured: true,
//       },
//       {
//         name: "Calça Gray Ink",
//         price: new Decimal(400),
//         description:
//           'Calça cargo com modelagem reta em sarja peletizada de alta resistência. Apresenta padronagem exclusiva "Gray Ink" em tons terrosos e acinzentados, seis bolsos funcionais e costuras reforçadas. Fechamento frontal por zíper e botão personalizado com acabamento premium.',
//         imageUrl: "/calca-gray-ink.png",
//         isFeatured: true,
//       },
//       {
//         name: "Camiseta Technology",
//         price: new Decimal(350),
//         description:
//           'Camiseta oversized na cor azul marinho, confeccionada em malha 100% algodão de toque macio e gramatura de 240g/m². Possui estampa frontal geométrica "Technology" em silk digital de alta definição, garantindo durabilidade e fidelidade de cores, além de acabamento com gola canelada reforçada.',
//         imageUrl: "/camiseta-technology.png",
//       },
//       {
//         name: "Jorts Light Gray",
//         price: new Decimal(300),
//         description:
//           'Bermuda jeans tipo "Jorts" com modelagem ampla e lavagem clara estonada. Confeccionada em denim 100% algodão de alta gramatura com detalhes em destroyed leves. Contém estampa localizada no bolso traseiro em silk digital de alta definição e barra com acabamento a fio, unindo o estilo urbano ao conforto.',
//         imageUrl: "/jorts-light-gray.png",
//         isFeatured: true,
//       },
//       {
//         name: "Boné Red wars",
//         price: new Decimal(150),
//         description:
//           'Boné modelo dad hat em sarja 100% algodão, apresentando lavagem estonada profunda em tom bordô para um visual vintage agressivo. O destaque fica para o patch frontal "Red Wars", com estampa em silk digital de alta definição que utiliza cores vibrantes em contraste com o fundo desgastado. Possui aba curva com detalhes em puídos feitos à mão e regulador traseiro em metal envelhecido.',
//         imageUrl: "/bone-red-wars.png",
//         isFeatured: true,
//       },
//       {
//         name: "Animal Black Jeans",
//         price: new Decimal(450),
//         description:
//           "Calça jeans com modelagem loose fit na cor preta, apresentando lavagem acid wash discreta. Produzida em denim 100% algodão de gramatura pesada, possui detalhes em puídos feitos à mão e patch exclusivo no bolso traseiro com arte em silk digital. Acabamento interno impecável com costuras reforçadas e botões em metal oxidado.",
//         imageUrl: "/animal-black-jeans.png",
//         isFeatured: true,
//       },
//       {
//         name: "Casaco Blue Florest",
//         price: new Decimal(370),
//         description:
//           'Casaco com modelagem oversized, confeccionada em malha premium 100% algodão com gramatura de 260g/m². Apresenta padronagem full print "Blue Florest" inspirada em texturas orgânicas e camuflagem artística, aplicada através de técnica que preserva o toque macio do tecido. Possui punhos em ribana canelada reforçada e gola redonda de alta resistência.',
//         imageUrl: "/casaco-blue-florest.png",
//         isFeatured: true,
//       },
//       {
//         name: "Boné Earth",
//         price: new Decimal(150),
//         description:
//           'Boné modelo dad hat confeccionado em sarja premium com lavagem "Earth Wash" em tons de marrom areia. A peça traz uma proposta mais sóbria e orgânica, com patch central apresentando arte abstrata em alta fidelidade. Conta com estrutura desconstruída de perfil baixo, ilhoses bordados para ventilação otimizada e fechamento strapback com fivela metálica ajustável.',
//         imageUrl: "/bone-earth.png",
//         isFeatured: true,
//       },
//     ],
//   });
// } catch (error) {
//   console.log(error);
// }

// try {
//   await prisma.product.update({
//     where: { id: "528ed2e3-76b8-4a70-8418-958b46ae970e" },
//     data: { isFeatured: true },
//   });
// } catch (error) {
//   console.log(error);
// }
