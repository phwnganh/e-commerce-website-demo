import { useCarousel } from "../../context/useCarousel";
import ArrowButtonsComponent from "../ArrowButtonComponent";

const CarouselControls = () => {
  const { scrollPrev, scrollNext, canScrollNext, canScrollPrev } =
    useCarousel();
  return (
    <ArrowButtonsComponent
      handlePrev={scrollPrev}
      handleNext={scrollNext}
      canScrollNext={canScrollNext}
      canScrollPrev={canScrollPrev}
    ></ArrowButtonsComponent>
  );
};

export default CarouselControls;
