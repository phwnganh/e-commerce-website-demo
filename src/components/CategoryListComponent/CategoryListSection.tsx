import { useAtomValue } from "jotai";
import { categoriesAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import Cosmetics from "../../assets/cosmetics.png";
import LoadingSpin from "../ui/LoadingSpin";
import { useInfiniteLoading } from "../../hooks/useInfiniteLoading";

const CategoryListSection = () => {
  const categories = useAtomValue(categoriesAtom);
  const navigate = useNavigate();

  const { visibleCount, isLoading, loadMoreRef } = useInfiniteLoading({
    totalCount: categories.length,
    delay: 1000,
    step: 8,
  });
  return (
    <section className="mb-15 lg:mb-35">
      <div className="mt-10 md:mt-15 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.slice(0, visibleCount).map((category, index) => (
          <div
            onClick={() => navigate(`${PRODUCTPAGE}/${category.slug}`)}
            key={index}
            className="flex flex-col gap-4 border justify-center items-center rounded-sm border-black-opacity-30 py-4 px-8 md:py-6 md:px-14 hover:bg-button-2 hover:border-button-2 group cursor-pointer"
          >
            <div className="aspect-square">
              <img
                src={Cosmetics}
                alt=""
                className="w-full h-full object-contain scale-75 group-hover:invert group-hover:brightness-0 group-hover:filter"
              />
            </div>
            <p className="text-center text-sm md:text-base group-hover:text-text-1 line-clamp-1">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {isLoading && <LoadingSpin />}

      <div ref={loadMoreRef}></div>
    </section>
  );
};

export default CategoryListSection;
