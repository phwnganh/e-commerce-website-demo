import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";

type UseEmplaScrollCarouselProps = {
  orientation?: "horizontal";
  emblaOptions?: EmblaOptionsType;
  resetOnReInit?: boolean;
};
export const useEmblaScrollCarousels = ({
  orientation,
  emblaOptions,
  resetOnReInit = true,
}: UseEmplaScrollCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...emblaOptions,
      axis: orientation === "horizontal" ? "x" : "y",
    },
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    updateScrollState();
    emblaApi.on("select", updateScrollState);

    emblaApi.on("reInit", () => {
        updateScrollState()
        if(resetOnReInit) emblaApi.scrollTo(0)
    })

    return () => {
      emblaApi.off("select", updateScrollState);
      emblaApi.off("reInit", updateScrollState);
    };
  }, [emblaApi, updateScrollState, resetOnReInit]);

  return {
    emblaRef,
    emblaApi,
    canScrollNext,
    canScrollPrev,
    scrollNext,
    scrollPrev,
  };
};
