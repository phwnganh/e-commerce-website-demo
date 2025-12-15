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
      className={`whitespace-nowrap font-medium text-text-1 text-xs md:text-base py-3 px-10 md:py-4 md:px-12 rounded-sm bg-button-2 hover:bg-hover-button-1 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default PrimaryCustomButton;
