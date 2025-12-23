import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ComponentProps,
  type KeyboardEvent,
} from "react";
import type {
  CarouselApi,
  CarouselContextProps,
  CarouselProps,
} from "../types/carousel.type";
import useEmblaCarousel from "embla-carousel-react";

export const CarouselContext = createContext<CarouselContextProps | null>(null);

export const Carousel = ({
  orientation,
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: ComponentProps<"div"> & CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "arrow-left") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "arrow-right") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;

    const handleReInit = () => {
      api.scrollTo(0)
    }
    onSelect(api);
    api.on("reInit", handleReInit);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", handleReInit)
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};
