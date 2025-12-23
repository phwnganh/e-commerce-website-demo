import { type ReactNode } from "react";

const CarouselTrack = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-7">{children}</div>;
};

export default CarouselTrack;
