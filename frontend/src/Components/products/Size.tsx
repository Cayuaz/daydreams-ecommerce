const sizes = ["P", "M", "G", "GG"];

type SizeProps = {
  selectedSize: string | null;
  setSelectedSize: (size: string | null) => void;
  className?: string;
};

const Size = ({ selectedSize, setSelectedSize, className }: SizeProps) => {
  return (
    <div className="flex flex-col gap-4 items-start ">
      <span>Tamanho</span>
      <div className="flex gap-4">
        {sizes.map((size, i) => (
          <button
            className={`${selectedSize === size ? "bg-(--secondary-color)/80" : "hover:bg-[#6A6868]/40"} border border-black w-10 sm:w-15 py-1 rounded transition-colors text-sm ${className}`}
            onClick={() => setSelectedSize(size)}
            key={i}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;

// import { useState } from "react";

// const Size = () => {
//   const [isActiveP, setIsActiveP] = useState(false);
//   const [isActiveM, setIsActiveM] = useState(false);
//   const [isActiveG, setIsActiveG] = useState(false);
//   const [isActiveGG, setIsActiveGG] = useState(false);

//   const disableAll = () => {
//     setIsActiveP(false);
//     setIsActiveM(false);
//     setIsActiveG(false);
//     setIsActiveGG(false);
//   };

//   return (
//     <div className="flex flex-col gap-4 items-start">
//       <span>Tamanho</span>
//       <div className="flex gap-4 justify-center">
//         <button
//           className={`${isActiveP ? "bg-black/40" : ""} border border-black py-1 w-15 rounded transition-colors`}
//           onClick={() => {
//             disableAll();
//             setIsActiveP(true);
//           }}
//         >
//           P
//         </button>
//         <button
//           className={`${isActiveM ? "bg-black/40 " : ""} border border-black py-1 w-15 rounded transition-colors`}
//           onClick={() => {
//             disableAll();
//             setIsActiveM(true);
//           }}
//         >
//           M
//         </button>
//         <button
//           className={`${isActiveG ? "bg-black/40" : ""} border border-black py-1 w-15 rounded transition-colors`}
//           onClick={() => {
//             disableAll();
//             setIsActiveG(true);
//           }}
//         >
//           G
//         </button>
//         <button
//           className={`${isActiveGG ? "bg-black/40 " : ""} border border-black py-1 w-15 rounded transition-colors`}
//           onClick={() => {
//             disableAll();
//             setIsActiveGG(true);
//           }}
//         >
//           GG
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Size;
