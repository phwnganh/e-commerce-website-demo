import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const HeroCarousel = ({ slides }: { slides: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      //   skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      // click vao moi dot -> hien thi item slide dua vao dot index
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    // scrollsnaplist - render slg dots dựa vào slideItem length
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);
  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((img, index) => (
            <div key={index} className="shrink-0 basis-full">
              <img src={img} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
              index === selectedIndex
                ? "bg-button-2 outline-2 outline-white"
                : "bg-white-opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
