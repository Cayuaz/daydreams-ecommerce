import { NavLink } from "react-router-dom";
type PagesProps = { total: number; url: string };

const Pages = ({ total, url }: PagesProps) => {
  return (
    <>
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
