import Cosmetics from "../../assets/cosmetics.png";
import type { Category } from "../../types/category.type";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";
import CarouselControls from "../CarouselComponent/CarouselControls";
import CarouselViewport from "../CarouselComponent/CarouselViewport";
import CarouselTrack from "../CarouselComponent/CarouselTrack";
import CarouselItem from "../CarouselComponent/CarouselItem";
const CategoriesList = ({ categories }: { categories: Category[] }) => {
  const navigate = useNavigate();
  return (
    <section className="mt-10 md:mt-20 p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader title="Categories" />
          <h3 className="font-semibold text-2xl md:text-4xl">
            Browse By Category
          </h3>
        </div>

        <CarouselControls />
      </div>
      <div className="mt-10 md:mt-15">
        <CarouselViewport>
          <CarouselTrack>
            {categories.map((category, index) => (
              <CarouselItem
                key={index}
                className="lg:basis-[calc(16.66%-23.33px)] md:basis-[calc(25%-21px)] basis-[calc(50%-14px)] "
              >
                <button
                  onClick={() => navigate(`${PRODUCTPAGE}/${category.slug}`)}
                  className="w-full flex flex-col gap-4 border justify-center items-center rounded-sm border-black-opacity-30 py-2 sm:py-4 md:py-6  hover:bg-button-2 hover:border-button-2 group cursor-pointer"
                >
                  <img
                    src={Cosmetics}
                    alt=""
                    className="aspect-square w-full h-full object-contain scale-50 group-hover:invert group-hover:brightness-0 group-hover:filter"
                  />
                  <p className="text-center text-sm md:text-base group-hover:text-text-1 line-clamp-1">
                    {category.name}
                  </p>
                </button>
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselViewport>
      </div>
      <hr className="mt-17.5 border-t border-t-black-opacity-30" />{" "}
    </section>
  );
};

export default CategoriesList;
