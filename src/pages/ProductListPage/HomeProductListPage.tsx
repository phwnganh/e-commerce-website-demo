import { useAtomValue, useSetAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { productsAtom, wishlistAtom } from "../../atom/store";
import type { Products } from "../../types/ProductTypes";
import { NavLink } from "react-router-dom";
import { HOMEPAGE, PRODUCTPAGE } from "../../constants/route.constants";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import BreadCumb from "../../components/ui/BreadCumb";

const HomeProductListPage = () => {
  const products = useAtomValue(productsAtom);
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
    if (visibleCount >= products.length || isLoading) {
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
  }, [visibleCount, products.length, isLoading]);
  return (
    <main className="max-w-[1170px] mx-auto">
      <section className="mb-35 px-4 lg:px-0">
        <BreadCumb
          items={[
            { label: "Home", to: HOMEPAGE },
            { label: "Products", to: PRODUCTPAGE },
          ]}
        />

        <div className="mt-15 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(0, visibleCount).map((product) => (
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
    </main>
  );
};

export default HomeProductListPage;
