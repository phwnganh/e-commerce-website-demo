import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive && "border-b border-b-black-opacity-80"
        } hover:border-b hover:border-b-black-opacity-80`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveNavLink;
