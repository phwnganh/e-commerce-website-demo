import { useAtomValue, useSetAtom } from "jotai";
import { wishlistAtom } from "../../atom/store";
import React, { useEffect, useRef, useState } from "react";
import type { CategoryDetail } from "../../types/CategoryType";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import type { Products } from "../../types/ProductTypes";
import LoadingSpin from "../../components/ui/LoadingSpin";

const CategoryProductListSection = ({
  categoryData,
}: {
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
    <section className="mb-35 px-4 lg:px-0">
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
      {isLoading && <LoadingSpin />}
      <div ref={loadMoreRef} className="h-10"></div>
    </section>
  );
};

export default CategoryProductListSection;
