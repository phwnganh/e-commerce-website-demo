import type { KeyboardEvent, ReactNode } from "react";

const CarouselViewport = ({
  carouselRef,
  children,
  onKeydown,
}: {
  carouselRef: (node: HTMLElement | null) => void;
  children: ReactNode;
  onKeydown?: (e: KeyboardEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      tabIndex={0}
      role="region"
      aria-description="carousel"
      onKeyDown={onKeydown}
    >
      {children}
    </div>
  );
};

export default CarouselViewport;
