import { NavLink } from "react-router-dom";
type PagesProps = { total: number; url: string };

const Pages = ({ total, url }: PagesProps) => {
  return (
    <>
      {/* Utiliza o array from para criar um array com os números da prop total, por ex: 4, vai criar um array de 1 a 4,
      o segundo argumento do array from é uma função como o map, e essa função tem dois parâmetros, o valor do item (underline indica que não será usado) e o índice
      */}
      {Array.from({ length: total }, (_, i) => (
        <NavLink
          to={`${url}${i + 1}`}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-(--secondary-color) rounded-full size-6 shadow"
                : ""
            } transition-colors`
          }
          key={i}
        >
          {i + 1}
        </NavLink>
      ))}
    </>
  );
};

export default Pages;
