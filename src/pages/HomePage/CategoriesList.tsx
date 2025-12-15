import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import Cosmetics from "../../assets/cosmetics.png";
import { useRef } from "react";
import type { Categories } from "../../types/CategoryType";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";
const CategoriesList = ({ categories }: { categories: Categories[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const itemsToShow = 6;
  const itemWidth = 198;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -itemWidth * itemsToShow, // Cuộn sang trái nhiều item cùng lúc
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: itemWidth * itemsToShow,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mt-10 md:mt-20 p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader title="Categories"/>
          <h3 className="font-semibold text-2xl md:text-4xl">
            Browse By Category
          </h3>
        </div>

        <div className="flex flex-row gap-2">
          <button
            onClick={scrollLeft}
            className="bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <img src={LeftArrow1} alt="left-arrow"/>
          </button>
          <button
            onClick={scrollRight}
            className="bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <img src={RightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="mt-15 flex flex-row gap-7 overflow-x-hidden scrollbar-hide snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((category, index) => (
          <button
            onClick={() => navigate(`${PRODUCTPAGE}/${category.slug}`)}
            className="flex flex-col gap-4 border justify-center items-center rounded-sm border-black-opacity-30 w-[170px] py-6 px-14 hover:bg-button-2 hover:border-button-2 group cursor-pointer"
            key={index}
          >
            <div className="flex justify-center items-center">
              <img
                src={Cosmetics}
                alt=""
                className="group-hover:invert group-hover:brightness-0 group-hover:filter"
              />
            </div>
            <p className="text-center text-sm md:text-base group-hover:text-text-1">
              {category.name}
            </p>
          </button>
        ))}
      </div>
      <hr className="mt-17.5 border-t border-t-black-opacity-30" />{" "}
    </section>
  );
};

export default CategoriesList;
