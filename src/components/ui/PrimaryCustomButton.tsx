import React from "react";

const PrimaryCustomButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  type?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-medium text-[#FAFAFA] text-xs md:text-base py-3 px-10 md:py-4 md:px-12 rounded-sm bg-[#DB4444] cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default PrimaryCustomButton;
