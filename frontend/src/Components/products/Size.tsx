import { useState } from "react";

const sizes = ["P", "M", "G", "GG"];

const Size = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4 items-start">
      <span>Tamanho</span>
      <div className="flex gap-4 justify-center">
        {sizes.map((size) => (
          <button
            className={`${selectedSize === size ? "bg-black/40" : ""} border border-black py-1 w-15 rounded transition-colors`}
            onClick={() => setSelectedSize(size)}
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
