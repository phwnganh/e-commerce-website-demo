import type { ReactNode } from "react";

const CarouselItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`shrink-0 ${className}`}>{children}</div>;
};

export default CarouselItem;
