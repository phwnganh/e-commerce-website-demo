import type { ReactNode } from "react";
import { useCarousel } from "../../context/useCarousel";

const CarouselViewport = ({children}: {children: ReactNode}) => {
    const {carouselRef} = useCarousel()
    return (
        <div ref={carouselRef} className="overflow-hidden">
            {children}
        </div>
    );
};

export default CarouselViewport;