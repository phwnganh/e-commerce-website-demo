import React from "react";
import UserCircle from "../../assets/user-circle.svg";
import UserShape from "../../assets/user-shape.svg";
const UserAvatarButton = ({
  isActive,
  onClick,
  children
}: {
  isActive: boolean;
  onClick?: () => void;
  children?: React.ReactNode
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-8 h-8 flex justify-center cursor-pointer ${
        isActive && "bg-button-2 rounded-full"
      }`}
      aria-label="User menu"
    >
      <div className="flex flex-col items-center justify-center gap-0.5">
        <img
          src={UserCircle}
          alt="user-circle-icon"
          className={`${
            isActive ? "w-1.5 h-1.5 brightness-0 invert" : "w-3 h-3"
          }`}
        />
        <img
          src={UserShape}
          alt="user-shape-icon"
          className={`${
            isActive ? "w-[11px] h-[5px] brightness-0 invert" : "w-[17px] h-2"
          }`}
        />
      </div>
      {children}
    </button>
  );
};

export default UserAvatarButton;
