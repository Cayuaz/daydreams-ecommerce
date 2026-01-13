// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   //   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/Components/ui/sheet";
// import { ChevronRight } from "lucide-react";

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export const ProductsMenuMobile = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   //verifica a largura da tela e muda o isOpen para false caso a tela seja maior que 640px
//   //Isso evita que o menu permaneça aberto mesmo depois da tela aumentar de tamanho
//   useEffect(() => {
//     const handleResize = () => {
//       const currentWidth = window.innerWidth;

//       if (currentWidth > 640) setIsOpen(false);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//       <SheetTrigger>
//         <ChevronRight className="size-5" />
//       </SheetTrigger>
//       <SheetContent className="bg-[#222224] text-white">
//         <SheetHeader className="flex flex-col gap-4">
//           <SheetTitle className="font-normal">
//             <SheetClose asChild>
//               <Link to={"*"} className="hover:text-[#974947]">
//                 All
//               </Link>
//             </SheetClose>
//           </SheetTitle>
//           <SheetTitle className="font-normal">
//             <Link to={"*"} className="hover:text-[#974947]">
//               Camisetas
//             </Link>
//           </SheetTitle>
//           <SheetTitle className="font-normal">
//             <Link to={"*"} className="hover:text-[#974947]">
//               Calças
//             </Link>
//           </SheetTitle>
//           <SheetTitle className="font-normal">
//             <Link to={"*"} className="hover:text-[#974947]">
//               Bermudas e Shorts
//             </Link>
//           </SheetTitle>
//           <SheetTitle className="font-normal">
//             <Link to={"*"} className="hover:text-[#974947]">
//               Casacos
//             </Link>
//           </SheetTitle>
//         </SheetHeader>
//       </SheetContent>
//     </Sheet>
//   );
// };
