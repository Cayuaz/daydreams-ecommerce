// import { Decimal } from "decimal.js";
// import { prisma } from "./lib/prisma.js";

// try {
//   await prisma.product.createMany({
//     data: [
//       // --- CAMISETAS GRÁFICAS (R$ 200) ---
//       {
//         name: "Camiseta Fragment White",
//         price: new Decimal(200),
//         description:
//           "Camiseta oversized branca em malha premium. A estampa central 'Fragment' traz uma composição abstrata monocromática com formas geométricas e texturas que remetem a estilhaços e arte urbana.",
//         imageUrl: "/camiseta-fragment-white.png",
//       },
//       {
//         name: "Camiseta Fragment Brown",
//         price: new Decimal(200),
//         description:
//           "Camiseta oversized em tom marrom café vintage. A estampa central 'Fragment' reimagina a arte abstrata com formas geométricas desconstruídas em tons de bege creme e preto.",
//         imageUrl: "/camiseta-fragment-brown.png",
//       },
//       {
//         name: "Camiseta Earthquake Red",
//         price: new Decimal(200),
//         description:
//           "Camiseta com lavagem 'acid wash' em tom vermelho bordô. A estampa 'Earthquake' simula fissuras tectônicas e texturas de solo em preto profundo, evocando uma estética brutalista.",
//         imageUrl: "/camiseta-earthquake-red.png",
//         isFeatured: true,
//       },
//       {
//         name: "Camiseta Abstract Earth",
//         price: new Decimal(200),
//         description:
//           'Camiseta oversized marrom estonado. O destaque é a estampa "Abstract Earth" que mistura formas orgânicas fluidas em tons de ocre, verde musgo e laranja queimado.',
//         imageUrl: "/camiseta-abstract-brown.png",
//       },
//       {
//         name: "Camiseta Abstract Forest",
//         price: new Decimal(200),
//         description:
//           'Camiseta oversized verde militar lavado. Apresenta a estampa "Abstract Forest" em silk digital, com espirais psicodélicas que mesclam tons de marrom, bege e verde escuro.',
//         imageUrl: "/camiseta-abstract-green.png",
//       },
//       {
//         name: "Camiseta Spirits Orange",
//         price: new Decimal(200),
//         description:
//           'Camiseta oversized laranja ferrugem com lavagem ácida. A estampa "Spirits" apresenta uma arte abstrata e difusa em tons escuros, simulando uma pintura desgastada.',
//         imageUrl: "/camiseta-spirits-orange.png",
//       },
//       {
//         name: "Camiseta Spirits Black",
//         price: new Decimal(200),
//         description:
//           'Camiseta oversized preta. O destaque é a estampa frontal "Spirits", aplicada em silk digital de alta definição que reproduz texturas de pintura a óleo abstrata.',
//         imageUrl: "/camiseta-spirits.png",
//       },

//       // --- LINHA ESSENTIALS (Camisetas R$ 180 | Moletons R$ 280 | Casacos R$ 250 | Calças R$ 200) ---
//       {
//         name: "Camiseta Essentials Moss",
//         price: new Decimal(180),
//         description:
//           "Camiseta base da linha Essentials na cor verde musgo com lavagem estonada sutil. Confeccionada em algodão premium de alta densidade com modelagem oversized.",
//         imageUrl: "/camiseta-essentials-green.png",
//       },
//       {
//         name: "Camiseta Essentials Brown",
//         price: new Decimal(180),
//         description:
//           "Camiseta base da linha Essentials em tom marrom café profundo. A lavagem industrial confere um toque aveludado e visual levemente desgastado nas costuras.",
//         imageUrl: "/camiseta-essentials-brown.png",
//       },
//       {
//         name: "Camiseta Essentials Red",
//         price: new Decimal(180),
//         description:
//           "Camiseta base da linha Essentials na cor vermelho bordô com intensa lavagem 'acid wash'. Confeccionada em algodão premium de alta densidade.",
//         imageUrl: "/camiseta-essentials-red.png",
//       },
//       {
//         name: "Camiseta Essentials Navy",
//         price: new Decimal(180),
//         description:
//           "Camiseta base da linha Essentials na cor azul navy profundo com lavagem estonada suave. Confeccionada em algodão premium de alta densidade com modelagem oversized.",
//         imageUrl: "/camiseta-essentials-blue.png",
//       },
//       {
//         name: "Camiseta Essentials Charcoal",
//         price: new Decimal(180),
//         description:
//           "Camiseta base da linha Essentials na cor preto estonado (Charcoal). Confeccionada em algodão premium de alta densidade com modelagem oversized estruturada.",
//         imageUrl: "/camiseta-essentials-black.png",
//       },
//       {
//         name: "Moletom Essentials Black",
//         price: new Decimal(280),
//         description:
//           "Moletom canguru clássico da linha Essentials na cor preta sólida. Produzido em felpa pesada (360g/m²) com modelagem boxy, capuz duplo estruturado e bolso amplo.",
//         imageUrl: "/moletom-essentials-black.png",
//         isFeatured: true,
//       },
//       {
//         name: "Moletom Essentials Gray",
//         price: new Decimal(280),
//         description:
//           "Moletom canguru clássico da linha Essentials na cor cinza com acabamento estonado. Produzido em felpa pesada (360g/m²) com modelagem boxy e punhos canelados firmes.",
//         imageUrl: "/moletom-essentials-cinza.png",
//       },
//       {
//         name: "Moletom Essentials Moss",
//         price: new Decimal(280),
//         description:
//           "Moletom canguru clássico da linha Essentials na cor verde musgo estonado. Produzido em felpa pesada (360g/m²) com modelagem boxy e capuz duplo.",
//         imageUrl: "/moletom-essentials-green.png",
//       },
//       {
//         name: "Moletom Essentials Coffee",
//         price: new Decimal(280),
//         description:
//           "Moletom canguru clássico da linha Essentials em tom marrom café com lavagem especial. Produzido em felpa pesada (360g/m²) com modelagem boxy e toque aveludado.",
//         imageUrl: "/moletom-essentials-brown.png",
//       },
//       {
//         name: "Moletom Essentials Lead",
//         price: new Decimal(280),
//         description:
//           "Moletom canguru clássico da linha Essentials na cor cinza chumbo 'stone washed'. Produzido em felpa pesada (360g/m²) com modelagem boxy e estrutura robusta.",
//         imageUrl: "/moletom-essentials-gray.png",
//       },
//       {
//         name: "Casaco Essentials Lead",
//         price: new Decimal(250),
//         description:
//           "Blusão gola careca na cor cinza chumbo estonado. Sem capuz, foca na silhueta boxy contemporânea com ombros caídos e punhos reforçados.",
//         imageUrl: "/casaco-essentials-gray.png",
//       },
//       {
//         name: "Casaco Essentials Black",
//         price: new Decimal(250),
//         description:
//           "Blusão gola careca na cor preta sólida com lavagem industrial suave. Confeccionado em felpa premium de alta gramatura com corte boxy contemporâneo.",
//         imageUrl: "/casaco-essentials-black.png",
//       },
//       {
//         name: "Calça Moletom Essentials Gray",
//         price: new Decimal(200),
//         description:
//           "Calça de moletom jogger cinza estonado. Feita em felpa de alta densidade, possui cós elástico e cordões de ajuste. Forma conjunto com os hoodies da linha.",
//         imageUrl: "/calca-moletom-essentials-cinza.png",
//       },
//       {
//         name: "Calça Moletom Essentials Black",
//         price: new Decimal(200),
//         description:
//           "Calça de moletom preta com modelagem relaxada. Tecido de alta densidade que não marca, com cós elástico e ajuste perfeito para o dia a dia.",
//         imageUrl: "/calca-moletom-essentials-black.png",
//       },

//       // --- CAMISAS (R$ 250 | Polo R$ 230) ---
//       {
//         name: "Camisa Boxy White",
//         price: new Decimal(250),
//         description:
//           "Camisa de manga curta com modelagem quadrada e colarinho estruturado. Feita em algodão encorpado com toque de linho, oferece um caimento clean.",
//         imageUrl: "/camisa-botao-white.png",
//       },
//       {
//         name: "Camisa Camp Black",
//         price: new Decimal(250),
//         description:
//           "Camisa de manga curta com gola cubana na cor preta. A modelagem ampla e o tecido levemente estruturado conferem um visual elegante e despojado.",
//         imageUrl: "/camisa-botao-black.png",
//       },
//       {
//         name: "Polo Oversized Black",
//         price: new Decimal(230),
//         description:
//           "Reinterpretação streetwear da clássica polo. Na cor preta, apresenta modelagem oversized, mangas alongadas e malha piquet encorpada.",
//         imageUrl: "/camisa-polo-black.png",
//       },

//       // --- CALÇAS (Jeans/Alfaiataria R$ 400-420) ---
//       {
//         name: "Calça Alfaiataria Black",
//         price: new Decimal(420),
//         description:
//           "Calça de alfaiataria moderna preta com pregas frontais. A modelagem wide leg fluida une a elegância sartorial ao conforto do streetwear.",
//         imageUrl: "/calca-alfaiataria-black.png",
//       },
//       {
//         name: "Calça Jeans Dark Blue",
//         price: new Decimal(420),
//         description:
//           "Calça jeans ultra baggy na cor azul índigo clássico. Lavagem estonada centralizada que cria volume visual e remete aos clássicos dos anos 90.",
//         imageUrl: "/dark-blue-jeans.png",
//       },
//       {
//         name: "Calça Jeans Dark Black",
//         price: new Decimal(420),
//         description:
//           "Calça jeans ultra baggy em denim preto com lavagem profunda (midnight). Apresenta bigodes 3D e desbotamento estratégico para visual autêntico.",
//         imageUrl: "/dark-black-jeans.png",
//       },
//       {
//         name: "Calça Jeans Dark Gray",
//         price: new Decimal(420),
//         description:
//           "Calça jeans wide leg em tom cinza cimento com lavagem ácida. A textura visual remete ao concreto urbano, perfeita para composições industriais.",
//         imageUrl: "/dark-gray-jeans.png",
//       },
//       {
//         name: "Calça Jeans Animal Black",
//         price: new Decimal(400),
//         description:
//           "Calça jeans loose fit preta com lavagem acid wash discreta. Possui detalhes em puídos feitos à mão e patch exclusivo no bolso traseiro.",
//         imageUrl: "/animal-black-jeans.png",
//         isFeatured: true,
//       },
//       {
//         name: "Calça Cargo Camo",
//         price: new Decimal(400),
//         description:
//           "Calça cargo utilitária em sarja robusta com estampa camuflada clássica. Modelagem wide leg com múltiplos bolsos laterais funcionais.",
//         imageUrl: "/camo-pants.png",
//       },
//       {
//         name: "Calça Cargo Gray Ink",
//         price: new Decimal(400),
//         description:
//           "Calça cargo reta em sarja peletizada. Apresenta padronagem exclusiva 'Gray Ink' em tons acinzentados e costuras reforçadas.",
//         imageUrl: "/calca-gray-ink.png",
//         isFeatured: true,
//       },

//       // --- SHORTS (R$ 150-260) ---
//       {
//         name: "Shorts Cargo Black",
//         price: new Decimal(180),
//         description:
//           "Shorts cargo preto em tecido tecnológico leve. Possui bolsos volumosos com lapela e cintura elástica, unindo funcionalidade e estética urbana.",
//         imageUrl: "/black-cargo-shorts.png",
//       },
//       {
//         name: "Shorts Gray Ink",
//         price: new Decimal(200),
//         description:
//           "Shorts em tactel com estampa sublimada geométrica em tons de cinza. Possui bolsos com zíper tratorado e cintura elástica para performance.",
//         imageUrl: "/shorts-gray-ink.png",
//       },
//       {
//         name: "Jorts Camo",
//         price: new Decimal(260),
//         description:
//           "Bermuda jeans ampla (Jorts) com padronagem camuflada. Modelagem abaixo do joelho tendência skatewear, feita em tecido resistente.",
//         imageUrl: "/camo-jorts.png",
//       },
//       {
//         name: "Jorts Light Gray",
//         price: new Decimal(260),
//         description:
//           "Bermuda jeans ampla (Jorts) com lavagem clara estonada e detalhes destroyed. Barra com acabamento a fio para um visual despojado.",
//         imageUrl: "/jorts-light-gray.png",
//         isFeatured: true,
//       },
//       {
//         name: "Shorts Essentials Gray",
//         price: new Decimal(150),
//         description:
//           "Shorts casual cinza grafite. A textura levemente amassada remete ao linho. Modelagem relaxada acima do joelho e cós elástico.",
//         imageUrl: "/shorts-essentials-gray.png",
//       },
//       {
//         name: "Shorts Essentials Black",
//         price: new Decimal(150),
//         description:
//           "Shorts casual preto com acabamento fosco. Tecido leve com caimento fluido, cós elástico e cordões de ajuste minimalistas.",
//         imageUrl: "/shorts-essentials-black.png",
//       },

//       // --- ACESSÓRIOS (Bonés R$ 120-150 | Toucas R$ 120 | Meias R$ 70) ---
//       {
//         name: "Boné Essentials Black",
//         price: new Decimal(120),
//         description:
//           "Boné Dad Hat em sarja preta com lavagem ácida intensa. Estrutura desconstruída e fecho ajustável de metal para visual vintage.",
//         imageUrl: "/bone-essentials-black.png",
//       },
//       {
//         name: "Boné Essentials Gray",
//         price: new Decimal(120),
//         description:
//           "Boné Dad Hat em sarja cinza chumbo com acabamento vintage. Toque macio e modelagem anatômica com regulagem traseira.",
//         imageUrl: "/bone-essentials-gray.png",
//       },
//       {
//         name: "Boné Red Wars",
//         price: new Decimal(150),
//         description:
//           "Boné Dad Hat bordô estonado com patch frontal 'Red Wars' em silk vibrante. Aba curva com puídos manuais e regulador em metal envelhecido.",
//         imageUrl: "/bone-red-wars.png",
//         isFeatured: true,
//       },
//       {
//         name: "Boné Earth Wash",
//         price: new Decimal(150),
//         description:
//           "Boné Dad Hat em sarja com lavagem areia. Proposta orgânica com patch de arte abstrata central e estrutura de perfil baixo.",
//         imageUrl: "/bone-earth.png",
//         isFeatured: true,
//       },
//       {
//         name: "Touca Inimal Black",
//         price: new Decimal(120),
//         description:
//           "Touca beanie preta em tricô de alta densidade. Modelagem anatômica com bordado frontal 'Inimal' em branco contrastante.",
//         imageUrl: "/touca-inimal-black.png",
//       },
//       {
//         name: "Touca Inimal Gray",
//         price: new Decimal(120),
//         description:
//           "Touca beanie cinza mescla em tricô de alta densidade. Versátil e confortável, com logo 'Inimal' bordado em destaque.",
//         imageUrl: "/touca-inimal-gray.png",
//       },
//       {
//         name: "Meia Daydreams Black",
//         price: new Decimal(70),
//         description:
//           "Meia cano alto preta em blend de algodão. Apresenta o patch exclusivo 'Daydreams' bordado na lateral para destaque no look.",
//         imageUrl: "/meia-daydreams-black.png",
//       },
//       {
//         name: "Meia Daydreams White",
//         price: new Decimal(70),
//         description:
//           "Meia cano alto branca clássica. Possui estrutura canelada e patch quadrado 'Daydreams' aplicado na lateral superior.",
//         imageUrl: "/meia-daydreams-white.png",
//       },
//       {
//         name: "Casaco Blue Forest",
//         price: new Decimal(250),
//         description:
//           "Casaco oversized com padronagem full print 'Blue Forest'. Inspirada em texturas orgânicas, feita em malha premium de toque macio.",
//         imageUrl: "/casaco-blue-florest.png",
//         isFeatured: true,
//       },
//     ],
//   });
// } catch (error) {
//   console.log(error);
// }

// try {
//   await prisma.product.createMany({
//     data: [
//       {
//         name: "Camiseta Fragment White",
//         price: new Decimal(200),
//         description:
//           "Camiseta oversized branca em malha premium. A estampa central 'Fragment' traz uma composição abstrata monocromática com formas geométricas e texturas que remetem a estilhaços e arte urbana, criando um visual impactante e contemporâneo.",
//         imageUrl: "/camiseta-fragment-white.png",
//       },
//       {
//         name: "Camisa Botão White",
//         price: new Decimal(250),
//         description:
//           "Camisa de manga curta com modelagem boxy (quadrada) e colarinho estruturado. Confeccionada em tecido de algodão encorpado com toque de linho, oferece um caimento clean e minimalista, ideal para transitar entre o casual e o sofisticado.",
//         imageUrl: "/camisa-botao-white.png",
//       },
//       {
//         name: "Calça Alfaiataria Black",
//         price: new Decimal(420),
//         description:
//           "Calça de alfaiataria moderna na cor preta. Possui pregas frontais que garantem volume e movimento, combinadas com uma modelagem wide leg fluida. A união perfeita entre a elegância sartorial e o conforto do streetwear.",
//         imageUrl: "/calca-alfaiataria-black.png",
//       },
//       {
//         name: "Moletom Essentials Black",
//         price: new Decimal(280),
//         description:
//           "O clássico hoodie da linha Essentials na cor preta sólida. Produzido em felpa de alta gramatura, possui interior macio, bolso canguru amplo e capuz estruturado. Uma peça fundamental que oferece isolamento térmico e durabilidade superior.",
//         imageUrl: "/moletom-essentials-black.png",
//         isFeatured: true,
//       },
//       {
//         name: "Moletom Essentials Gray",
//         price: new Decimal(280),
//         description:
//           "Moletom canguru na cor cinza com acabamento estonado (washed gray), conferindo um visual vintage sutil. A modelagem oversized e os punhos canelados firmes garantem o caimento característico da marca, unindo conforto extremo e estilo.",
//         imageUrl: "/moletom-essentials-cinza.png",
//       },
//       {
//         name: "Calça Moletom Essentials Gray",
//         price: new Decimal(200),
//         description:
//           "Calça de moletom jogger na cor cinza estonado, formando conjunto com o hoodie da linha. Possui cintura elástica com cordão de ajuste, bolsos laterais funcionais e barra com elástico, feita em moletom pesado para máximo conforto.",
//         imageUrl: "/calca-moletom-essentials-cinza.png",
//       },
//       {
//         name: "Boné Essentials Black",
//         price: new Decimal(120),
//         description:
//           "Boné estilo 'dad hat' em sarja preta com lavagem ácida intensa, criando uma textura visual de desgaste natural. Possui aba curva, estrutura desestruturada para melhor encaixe e fecho traseiro ajustável de metal.",
//         imageUrl: "/bone-essentials-black.png",
//       },
//       {
//         name: "Boné Essentials Gray",
//         price: new Decimal(120),
//         description:
//           "Boné em sarja na cor cinza chumbo com acabamento vintage. A lavagem especial realça as costuras e confere um toque macio ao tecido. Acessório versátil e atemporal com modelagem anatômica e regulagem traseira.",
//         imageUrl: "/bone-essentials-gray.png",
//       },
//       {
//         name: "Calça Moletom Essentials Black",
//         price: new Decimal(200),
//         description:
//           "Calça de moletom preta com modelagem relaxada. O tecido de alta densidade proporciona um caimento estruturado que não marca, enquanto o cós elástico e os cordões de algodão garantem o ajuste perfeito. Essencial para o dia a dia.",
//         imageUrl: "/calca-moletom-essentials-black.png",
//       },
//       {
//         name: "Casaco Essentials Gray",
//         price: new Decimal(250),
//         description:
//           "Blusão de moletom gola careca (crewneck) na cor cinza chumbo estonado. Sem capuz, essa peça oferece um visual mais limpo e versátil. O acabamento nos punhos e na barra é reforçado, mantendo a silhueta boxy e o conforto térmico.",
//         imageUrl: "/casaco-essentials-gray.png",
//       },
//       {
//         name: "Casaco Essentials Black",
//         price: new Decimal(250),
//         description:
//           "Blusão de moletom crewneck (gola careca) na cor preta sólida com lavagem industrial suave para toque macio. A peça foca no essencial: corte boxy contemporâneo, ombros caídos e punhos reforçados. Confeccionado em felpa premium de alta gramatura.",
//         imageUrl: "/casaco-essentials-black.png",
//       },
//       {
//         name: "Camiseta Fragment Brown",
//         price: new Decimal(200),
//         description:
//           "Camiseta oversized em tom marrom café vintage (Coffee Brown). A estampa central 'Fragment' reimagina a arte abstrata com formas geométricas desconstruídas em tons de bege creme e preto, criando um contraste sofisticado e terroso.",
//         imageUrl: "/camiseta-fragment-brown.png",
//       },
//       {
//         name: "Camiseta Earthquake Red",
//         price: new Decimal(200),
//         description:
//           "Camiseta com lavagem 'acid wash' em tom vermelho bordô desgastado. A estampa 'Earthquake' simula fissuras tectônicas e texturas de solo em preto profundo, evocando uma estética brutalista e grunge. Peça com gola rebatida e acabamento rústico.",
//         imageUrl: "/camiseta-earthquake-red.png",
//         isFeatured: true,
//       },
//       {
//         name: "Camisa Botão Black",
//         price: new Decimal(250),
//         description:
//           "Camisa de manga curta com gola cubana (camp collar) na cor preta. A modelagem ampla e o tecido levemente estruturado conferem um visual que transita entre a elegância e o despojado. Fechamento frontal com botões discretos tom sobre tom.",
//         imageUrl: "/camisa-botao-black.png",
//       },
//       {
//         name: "Camisa Polo Black",
//         price: new Decimal(230),
//         description:
//           "Uma reinterpretação streetwear da clássica camisa polo. Na cor preta, apresenta modelagem oversized com mangas alongadas e ombros deslocados. Confeccionada em malha piquet encorpada, possui vista com dois botões e caimento fluido.",
//         imageUrl: "/camisa-polo-black.png",
//       },
//     ],
//   });
// } catch (error) {
//   console.log(error);
// }

// // try {
// //   await prisma.product.deleteMany({
// //     where: {
// //       OR: [
// //         { id: "3cf87e9b-0da2-4f74-8fc7-8a335ac13ec8" },
// //         { id: "72533ceb-e4e6-462b-bdff-e4ec7bd92d04" },
// //       ],
// //     },
// //   });
// //   console.log("produto excluído");
// // } catch (error) {
// //   console.log(error);
// // }

// try {
//   await prisma.product.createMany({
//     data: [
//       {
//         name: "Camiseta Abstract Brown",
//         price: new Decimal(200),
//         description:
//           'Camiseta oversized na cor marrom estonado. O destaque é a estampa central "Abstract Earth" que mistura formas orgânicas fluidas em tons de ocre, verde musgo e laranja queimado, evocando camadas geológicas. Produzida em malha 100% algodão de toque macio e acabamento vintage.',
//         imageUrl: "/camiseta-abstract-brown.png",
//       },
//       {
//         name: "Camiseta Essentials Green",
//         price: new Decimal(180),
//         description:
//           "Peça fundamental da linha Essentials. Camiseta na cor verde musgo com lavagem estonada sutil, trazendo profundidade à cor. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada, garantindo durabilidade e estilo minimalista.",
//         imageUrl: "/camiseta-essentials-green.png",
//       },
//       {
//         name: "Moletom Essentials Green",
//         price: new Decimal(280),
//         description:
//           "Item chave da coleção Essentials. Moletom canguru na cor verde musgo com acabamento stone washed para um visual vintage autêntico. Produzido em felpa 100% algodão de gramatura pesada (360g/m²), oferece estrutura robusta, capuz duplo e caimento boxy característico da linha.",
//         imageUrl: "/moletom-essentials-green.png",
//       },
//       {
//         name: "Camiseta Essentials Brown",
//         price: new Decimal(200),
//         description:
//           "Peça fundamental da linha Essentials. Camiseta em tom marrom café profundo. A lavagem industrial confere um toque aveludado e visual levemente desgastado nas costuras. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada.",
//         imageUrl: "/camiseta-essentials-brown.png",
//       },
//       {
//         name: "Black Cargo Shorts",
//         price: new Decimal(180),
//         description:
//           "Shorts cargo na cor preta com pegada utilitária e urbana. Confeccionado em tecido tecnológico levemente texturizado (nylon feel), possui bolsos laterais volumosos com lapela e cintura elástica com cordão ajustável, unindo funcionalidade e a estética streetwear contemporânea.",
//         imageUrl: "/black-cargo-shorts.png",
//       },
//       {
//         name: "Shorts Essentials Gray",
//         price: new Decimal(150),
//         description:
//           "Integrante da linha Essentials. Shorts na cor cinza grafite com textura levemente amassada (crinkled texture) que remete ao linho. Possui modelagem relaxada acima do joelho, cós elástico confortável e bolsos laterais discretos, ideal para composições casuais e sofisticadas.",
//         imageUrl: "/shorts-essentials-gray.png",
//       },
//       {
//         name: "Shorts Essentials Black",
//         price: new Decimal(150),
//         description:
//           "Integrante da linha Essentials. Shorts na cor preta com acabamento fosco e textura leve. A modelagem é fluida e confortável, com cós elástico e cordões de ajuste minimalistas. Uma peça versátil que transita entre o visual de casa e o urbano com facilidade.",
//         imageUrl: "/shorts-essentials-black.png",
//       },
//       {
//         name: "Camiseta Abstract Green",
//         price: new Decimal(200),
//         description:
//           'Camiseta oversized em tom verde militar lavado. Apresenta a estampa "Abstract Forest" em silk digital de alta definição, com espirais psicodélicas que mesclam tons de marrom, bege e verde escuro, criando um efeito visual de movimento líquido sobre a malha premium.',
//         imageUrl: "/camiseta-abstract-green.png",
//       },
//       {
//         name: "Camiseta Spirits Orange",
//         price: new Decimal(200),
//         description:
//           'Camiseta oversized na cor laranja ferrugem com lavagem ácida intensa. A estampa central "Spirits" apresenta uma arte abstrata e difusa em tons escuros, simulando uma pintura desgastada pelo tempo, conferindo uma aura grunge e artística à peça.',
//         imageUrl: "/camiseta-spirits-orange.png",
//       },
//       {
//         name: "Dark Blue Jeans",
//         price: new Decimal(420),
//         description:
//           "Calça jeans com modelagem ultra baggy (pernas largas) na cor azul índigo clássico. Possui lavagem estonada centralizada (faded wash) que cria volume visual, costuras contrastantes e caimento pesado característico do denim premium. Uma releitura moderna dos clássicos dos anos 90.",
//         imageUrl: "/dark-blue-jeans.png",
//       },
//       {
//         name: "Dark Black Jeans",
//         price: new Decimal(420),
//         description:
//           "Calça jeans com modelagem ultra baggy em denim preto com lavagem estonada profunda (midnight wash). Apresenta bigodes tridimensionais e desbotamento estratégico nas coxas, conferindo um visual 'worn-in' autêntico e rebelde. Denim pesado de alta durabilidade.",
//         imageUrl: "/dark-black-jeans.png",
//       },
//       {
//         name: "Dark Gray Jeans",
//         price: new Decimal(420),
//         description:
//           "Calça jeans wide leg em tom cinza cimento com lavagem ácida (acid wash). A textura visual remete ao concreto urbano, perfeita para composições grunge e streetwear industrial. Possui caimento solto e costuras reforçadas.",
//         imageUrl: "/dark-gray-jeans.png",
//       },
//       {
//         name: "Shorts Gray Ink",
//         price: new Decimal(200),
//         description:
//           "Shorts em tecido tecnológico leve (tactel) com estampa sublimada que mistura formas geométricas e borrões em tons de cinza, verde e azul. Possui bolsos laterais com zíper tratorado para segurança e cintura elástica, unindo performance esportiva e estilo urbano.",
//         imageUrl: "/shorts-gray-ink.png",
//       },
//     ],
//   });
// } catch (error) {
//   console.log(error);
// }

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
//       },
//       {
//         name: "Moletom Essentials Gray",
//         price: new Decimal(280),
//         description:
//           'Item chave da coleção Essentials. Moletom canguru na cor cinza chumbo com acabamento "stone washed" para um visual vintage autêntico. Produzido em felpa 100% algodão de gramatura pesada (360g/m²), oferece estrutura robusta, capuz duplo e caimento boxy característico da linha.',
//         imageUrl: "/moletom-essentials-gray.png",
//       },
//       {
//         name: "Camiseta Spirits",
//         price: new Decimal(200),
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
//         price: new Decimal(280),
//         description:
//           "Item chave da coleção Essentials. Moletom canguru em tom marrom café com lavagem estonada especial que realça as costuras e proporciona toque aveludado. Produzido em felpa 100% algodão de gramatura pesada (360g/m²), oferece estrutura robusta, capuz duplo e caimento boxy característico da linha.",
//         imageUrl: "/moletom-essentials-brown.png",
//       },
//       {
//         name: "Camiseta Essentials Red",
//         price: new Decimal(180),
//         description:
//           'Peça fundamental da linha Essentials. Camiseta na cor vermelho bordô (Burgundy) com intensa lavagem "acid wash", criando nuances únicas de cor. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada, garantindo durabilidade e estilo.',
//         imageUrl: "/camiseta-essentials-red.png",
//       },
//       {
//         name: "Camo Jorts",
//         price: new Decimal(300),
//         description:
//           'Bermuda "Jorts" (Jeans Shorts) com padronagem camuflada. Modelagem ampla abaixo do joelho seguindo a tendência skatewear dos anos 90/00. Feita em tecido resistente, conta com bolsos cargo laterais espaçosos e passantes reforçados, ideal para o dia a dia urbano.',
//         imageUrl: "/camo-jorts.png",
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
//         price: new Decimal(180),
//         description:
//           "Peça fundamental da linha Essentials. Camiseta na cor azul navy profundo com lavagem estonada suave, conferindo aspecto vintage e toque macio. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada, garantindo durabilidade e estilo.",
//         imageUrl: "/camiseta-essentials-blue.png",
//       },
//       {
//         name: "Camiseta Essentials Black",
//         price: new Decimal(180),
//         description:
//           "Peça fundamental da linha Essentials. Camiseta na cor preto estonado (charcoal), submetida a lavagem industrial para uma cor exclusiva e textura confortável. Confeccionada em algodão premium de alta densidade, possui modelagem oversized estruturada e gola careca reforçada, garantindo durabilidade e estilo.",
//         imageUrl: "/camiseta-essentials-black.png",
//       },
//     ],
//   });
// } catch (error) {
//   console.log(error);
// }

// // try {
// //   await prisma.user.create({
// //     data: {
// //       name: "joao",
// //       lastname: "silva",
// //       email: "joao@gmail.com",
// //       password: "123",
// //     },
// //   });
// // } catch (error) {
// //   console.log(error);
// // }

// try {
//   await prisma.product.createMany({
//     data: [
//       {
//         name: "Calça Gray Ink",
//         price: new Decimal(400),
//         description:
//           'Calça cargo com modelagem reta em sarja peletizada de alta resistência. Apresenta padronagem exclusiva "Gray Ink" em tons terrosos e acinzentados, seis bolsos funcionais e costuras reforçadas. Fechamento frontal por zíper e botão personalizado com acabamento premium.',
//         imageUrl: "/calca-gray-ink.png",
//         isFeatured: true,
//       },
//       {
//         name: "Jorts Light Gray",
//         price: new Decimal(230),
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
//         price: new Decimal(350),
//         description:
//           "Calça jeans com modelagem loose fit na cor preta, apresentando lavagem acid wash discreta. Produzida em denim 100% algodão de gramatura pesada, possui detalhes em puídos feitos à mão e patch exclusivo no bolso traseiro com arte em silk digital. Acabamento interno impecável com costuras reforçadas e botões em metal oxidado.",
//         imageUrl: "/animal-black-jeans.png",
//         isFeatured: true,
//       },
//       {
//         name: "Casaco Blue Florest",
//         price: new Decimal(250),
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

// // try {
// //   await prisma.product.update({
// //     where: { id: "3cf87e9b-0da2-4f74-8fc7-8a335ac13ec8" },
// //     data: { isFeatured: true },
// //   });
// // } catch (error) {
// //   console.log(error);
// // }
