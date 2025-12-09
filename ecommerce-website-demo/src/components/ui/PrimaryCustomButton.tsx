import React from "react";

const PrimaryCustomButton = ({
  bgColor,
  onClick,
  type,
  children,
}: {
  bgColor: string;
  onClick?: () => void;
  type?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`font-medium text-[#FAFAFA] text-xs md:text-base py-3 px-10 md:py-4 md:px-12 rounded-sm bg-[${bgColor}] cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default PrimaryCustomButton;
