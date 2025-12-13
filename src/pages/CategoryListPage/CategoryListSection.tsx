import { useAtomValue } from "jotai";
import { categoriesAtom } from "../../atom/store";
import { NavLink, useNavigate } from "react-router-dom";
import {
  CATEGORYPAGE,
  HOMEPAGE,
  PRODUCTPAGE,
} from "../../constants/route.constants";
import Cosmetics from "../../assets/cosmetics.png";
import { useEffect, useRef, useState } from "react";

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
    <section className="mt-20 mb-35 px-4 lg:px-0">
      <div className="flex flex-row gap-3 items-center">
        <NavLink to={HOMEPAGE} className="opacity-50 text-sm">
          Home
        </NavLink>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink
          to={CATEGORYPAGE}
          className={({ isActive }) =>
            `${isActive ? "text-sm" : "text-black-opacity-80 text-sm"}`
          }
        >
          Categories
        </NavLink>
      </div>

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
                loading="lazy"
                className="group-hover:invert group-hover:brightness-0 group-hover:filter"
              />
            </div>
            <p className="text-center text-sm md:text-base group-hover:text-text-1">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-center mt-6">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-button-2 rounded-full animate-spin"></div>
        </div>
      )}

      <div ref={loadMoreRef} className="h-10"></div>
    </section>
  );
};

export default CategoryListSection;
