import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import React, { useEffect, useRef, useState } from "react";
import type { CategoryDetail } from "../../types/category.type";
import HomeProductItem from "../ProductItem/HomeProductItem";
import LoadingSpin from "../ui/LoadingSpin";

const CategoryProductListSection = ({
  categoryData,
}: {
  categoryData: CategoryDetail;
}) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const wishlists = useAtomValue(wishlistAtom);
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
    <section className="mb-15 md:mb-35">
      <div className="mt-10 md:mt-15 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoryData.products.slice(0, visibleCount).map((product) => (
          <React.Fragment key={product.id}>
            <HomeProductItem product={product} wishlists={wishlists} />
          </React.Fragment>
        ))}
      </div>
      {isLoading && <LoadingSpin />}
      <div ref={loadMoreRef} className="h-10"></div>
    </section>
  );
};

export default CategoryProductListSection;
