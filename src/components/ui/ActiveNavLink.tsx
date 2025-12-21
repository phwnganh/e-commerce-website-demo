import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNavLink = ({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `
  border-b 
  hover:border-b-black-opacity-80
  ${isActive ? " border-b-black-opacity-80" : "border-b-transparent"}
  `
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveNavLink;
