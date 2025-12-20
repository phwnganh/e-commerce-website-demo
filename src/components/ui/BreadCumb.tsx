import type { BreadCumpItems } from "../../types/breadcrumb.type";
import { NavLink } from "react-router-dom";

const BreadCumb = ({
  items,
  className = "",
}: {
  items: BreadCumpItems[];
  className?: string;
}) => {
  return (
    <nav className={`mt-11 md:mt-20 flex gap-3 items-center ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex gap-3 items-center">
            {item.to && !isLast ? (
              <NavLink to={item.to} className="text-black-opacity-80 text-sm">
                {item.label}
              </NavLink>
            ) : (
              <div className="text-sm">{item.label}</div>
            )}

            {!isLast && (
              <div className="border opacity-50 rotate-117 w-3"></div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default BreadCumb;
