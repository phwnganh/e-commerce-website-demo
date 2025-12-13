import { useAtomValue, useSetAtom } from "jotai";
import { wishlistAtom } from "../../atom/store";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CATEGORYPAGE,
  HOMEPAGE,
  PRODUCTPAGE,
} from "../../constants/route.constants";
import type { CategoryDetail } from "../../types/CategoryType";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import type { Products } from "../../types/ProductTypes";

const CategoryProductListSection = ({
  slug,
  categoryData,
}: {
  slug?: string;
  categoryData: CategoryDetail;
}) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const wishlists = useAtomValue(wishlistAtom);
  const setWishlists = useSetAtom(wishlistAtom);

  const handleAddToWishlist = (product: Products) => {
    const exists = wishlists.some((item) => item.id === product.id);
    let updated;

    if (exists) {
      updated = wishlists.filter((item) => item.id !== product.id);
    } else {
      updated = [...wishlists, product];
    }
    setWishlists(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };
  useEffect(() => {
    if (visibleCount >= categoryData.products.length || isLoading) {
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
  }, [visibleCount, categoryData.products.length, isLoading]);
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
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink
          to={`${PRODUCTPAGE}/${slug}`}
          className={({ isActive }) =>
            `${isActive ? "text-sm" : "text-black-opacity-80 text-sm"}`
          }
        >
          {slug}
        </NavLink>
      </div>

      <div className="mt-15 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoryData.products.slice(0, visibleCount).map((product) => (
          <React.Fragment key={product.id}>
            <HomeProductItem
              product={product}
              wishlists={wishlists}
              onAddToWishlist={handleAddToWishlist}
            />
          </React.Fragment>
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

export default CategoryProductListSection;
