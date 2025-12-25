import React from "react";

const SecondaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="whitespace-nowrap border-black-opacity-80 border rounded-sm py-3 px-10 md:py-4 md:px-12 text-xs md:text-base cursor-pointer hover:bg-gray-200 hover:border-gray-200"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
