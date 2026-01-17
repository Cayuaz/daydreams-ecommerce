// import { Decimal } from "decimal.js";
// import { prisma } from "./lib/prisma.js";

// try {
//   await prisma.product.createMany({
//     data: [
//       {
//         name: "Touca Inimal Black",
//         price: new Decimal(120),
//         description:
//           'Touca beanie na cor preta, confeccionada em tricô de alta densidade para maior conforto térmico e durabilidade. Possui modelagem anatômica que se ajusta perfeitamente à cabeça e destaca-se pelo bordado frontal "Inimal" em linha branca contrastante com design abstrato minimalista.',
//         imageUrl: "/touca-inimal-black.png",
//       },
//       {
//         name: "Camo Pants",
//         price: new Decimal(400),
//         description:
//           "Calça cargo com estampa camuflada clássica em tons de verde e marrom. Confeccionada em sarja robusta, possui modelagem wide leg utilitária com múltiplos bolsos laterais funcionais e costuras reforçadas, unindo a estética militar clássica ao conforto do streetwear contemporâneo.",
//         imageUrl: "/camo-pants.png",
//         isFeatured: true,
//       },
//       {
//         name: "Moletom Essentials Gray",
//         price: new Decimal(300),
//         description:
//           'Item chave da coleção Essentials. Moletom canguru na cor cinza chumbo com acabamento "stone washed" para um visual vintage autêntico. Produzido em felpa 100% algodão de gramatura pesada (360g/m²), oferece estrutura robusta, capuz duplo e caimento boxy característico da linha.',
//         imageUrl: "/moletom-essentials-gray.png",
//         isFeatured: true,
//       },
//       {
//         name: "Camiseta Spirits",
//         price: new Decimal(350),
//         description:
//           'Camiseta oversized preta em malha premium 100% algodão. O destaque da peça é a estampa frontal "Spirits", aplicada em silk digital de alta definição que reproduz texturas de pintura a óleo abstrata em tons terrosos e esverdeados, criando uma peça de vestuário com aura artística única.',
//         imageUrl: "/camiseta-spirits.png",
//       },
//       {
//         name: "Meia Daydreams Black",
//         price: new Decimal(70),
//         description:
//           'Meia de cano alto na cor preta, desenvolvida em blend de algodão e poliamida para respiração e ajuste ideal. Apresenta o patch exclusivo "Daydreams" bordado na lateral, trazendo um detalhe colorido e artístico que eleva o acessório básico a um item de destaque no look.',
//         imageUrl: "/meia-daydreams-black.png",
//       },
//       {
//         name: "Meia Daydreams White",
//         price: new Decimal(70),
//         description:
//           'Meia de cano alto clássica na cor branca, com estrutura canelada reforçada no arco do pé. O diferencial fica por conta do patch quadrado "Daydreams" aplicado na lateral superior, adicionando uma identidade visual vibrante e exclusiva à peça essencial.',
//         imageUrl: "/meia-daydreams-white.png",
//       },
//       {
//         name: "Moletom Essentials Brown",
//         price: new Decimal(300),
//         description:
//           "Item chave da coleção Essentials. Moletom canguru em tom marrom café com lavagem estonada especial que realça as costuras e proporciona toque aveludado. Produzido em felpa 100% algodão de gramatura pesada (360g/m²), oferece estrutura robusta, capuz duplo e caimento boxy característico da linha.",
//         imageUrl: "/moletom-essentials-brown.png",
//       },
//       {
//         name: "Camiseta Essentials Red",
//         price: new Decimal(350),
//         description:
//           'Peça fundamental da linha Essentials. Camiseta na cor vermelho bordô (Burgundy) com intensa lavagem "acid wash", criando nuances únicas de cor. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada, garantindo durabilidade e estilo.',
//         imageUrl: "/camiseta-essentials-red.png",
//       },
//       {
//         name: "Camo Jorts",
//         price: new Decimal(300),
//         description:
//           'Bermuda "Jorts" (Jeans Shorts) com padronagem camuflada. Modelagem ampla abaixo do joelho seguindo a tendência skatewear dos anos 90/00. Feita em tecido resistente, conta com bolsos cargo laterais espaçosos e passantes reforçados, ideal para o dia a dia urbano.',
//         imageUrl: "/camo-jorts.jpg",
//         isFeatured: true,
//       },
//       {
//         name: "Touca Inimal Gray",
//         price: new Decimal(120),
//         description:
//           'Touca beanie em tricô na cor cinza escuro mescla. Oferece elasticidade e conforto sem perder a forma. Traz o logo "Inimal" bordado em branco na parte frontal, uma peça versátil e atemporal indispensável para compor o visual nos dias mais frios.',
//         imageUrl: "/touca-inimal-gray.png",
//       },
//       {
//         name: "Camiseta Essentials Blue",
//         price: new Decimal(350),
//         description:
//           "Peça fundamental da linha Essentials. Camiseta na cor azul navy profundo com lavagem estonada suave, conferindo aspecto vintage e toque macio. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada, garantindo durabilidade e estilo.",
//         imageUrl: "/camiseta-essentials-blue.png",
//       },
//       {
//         name: "Camiseta Essentials Black",
//         price: new Decimal(350),
//         description:
//           "Peça fundamental da linha Essentials. Camiseta na cor preto estonado (charcoal), submetida a lavagem industrial para uma cor exclusiva e textura confortável. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada, garantindo durabilidade e estilo.",
//         imageUrl: "/camiseta-essentials-black.png",
//       },
//     ],
//   });
// } catch (error) {
//   console.log(error);
// }

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
