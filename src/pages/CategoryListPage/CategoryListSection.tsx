import { useAtomValue } from "jotai";
import { categoriesAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import Cosmetics from "../../assets/cosmetics.png";
import { useEffect, useRef, useState } from "react";
import LoadingSpin from "../../components/ui/LoadingSpin";

const CategoryListSection = () => {
  const categories = useAtomValue(categoriesAtom);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (visibleCount >= categories.length || isLoading) {
      return;
    }
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setIsLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setVisibleCount((prev) => prev + 8);
          setIsLoading(false);
        }
      },
      {
        threshold: 1,
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => observer.disconnect();
  }, [visibleCount, categories.length, isLoading]);
  return (
    <section className="mb-35 px-4 lg:px-0">
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.slice(0, visibleCount).map((category, index) => (
          <div
            onClick={() => navigate(`${PRODUCTPAGE}/${category.slug}`)}
            key={index}
            className="flex flex-col gap-4 border justify-center items-center rounded-sm border-black-opacity-30 py-6 px-14 hover:bg-button-2 hover:border-button-2 group cursor-pointer"
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
          </div>
        ))}
      </div>

      {isLoading && <LoadingSpin />}

      <div ref={loadMoreRef} className="h-10"></div>
    </section>
  );
};

export default CategoryListSection;
