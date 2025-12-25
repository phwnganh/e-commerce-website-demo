import { useAtomValue } from "jotai";
import React from "react";
import { productsAtom, wishlistAtom } from "../../atom/store";
import { HOMEPAGE, PRODUCTPAGE } from "../../constants/route.constants";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import BreadCumb from "../../components/ui/BreadCumb";
import LoadingSpin from "../../components/ui/LoadingSpin";
import { useInfiniteLoading } from "../../hooks/useInfiniteLoading";

const HomeProductListPage = () => {
  const products = useAtomValue(productsAtom);
  const wishlists = useAtomValue(wishlistAtom);

  const { visibleCount, isLoading, loadMoreRef } = useInfiniteLoading({
    totalCount: products.products.length,
    delay: 1000,
    step: 8,
  });
  return (
    <main className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <section className="mb-15 lg:mb-35">
        <BreadCumb
          items={[
            { label: "Home", to: HOMEPAGE },
            { label: "Products", to: PRODUCTPAGE },
          ]}
        />

        <div className="mt-10 md:mt-15 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.products.slice(0, visibleCount).map((product) => (
            <React.Fragment key={product.id}>
              <HomeProductItem product={product} wishlists={wishlists} />
            </React.Fragment>
          ))}
        </div>
        {isLoading && <LoadingSpin />}
        <div ref={loadMoreRef}></div>
      </section>
    </main>
  );
};

export default HomeProductListPage;
