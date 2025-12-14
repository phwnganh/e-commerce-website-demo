import type React from "react";

const LimitedBannerCustomButton = ({
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
      className={`font-medium text-text-1 text-xs md:text-base py-3 px-10 md:py-4 md:px-12 rounded-sm bg-button-1 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default LimitedBannerCustomButton;
