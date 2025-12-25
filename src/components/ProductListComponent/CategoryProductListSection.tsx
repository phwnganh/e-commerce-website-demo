import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import React from "react";
import type { CategoryDetail } from "../../types/category.type";
import HomeProductItem from "../ProductItem/HomeProductItem";
import LoadingSpin from "../ui/LoadingSpin";
import { useInfiniteLoading } from "../../hooks/useInfiniteLoading";

const CategoryProductListSection = ({
  categoryData,
}: {
  categoryData: CategoryDetail;
}) => {
  const wishlists = useAtomValue(wishlistAtom);
  const { visibleCount, isLoading, loadMoreRef } = useInfiniteLoading({
    totalCount: categoryData.products.length,
    delay: 1000,
    step: 8,
  });
  return (
    <section className="mb-15 lg:mb-35">
      <div className="mt-10 md:mt-15 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoryData.products.slice(0, visibleCount).map((product) => (
          <React.Fragment key={product.id}>
            <HomeProductItem product={product} wishlists={wishlists} />
          </React.Fragment>
        ))}
      </div>
      {isLoading && <LoadingSpin />}
      <div ref={loadMoreRef}></div>
    </section>
  );
};

export default CategoryProductListSection;
