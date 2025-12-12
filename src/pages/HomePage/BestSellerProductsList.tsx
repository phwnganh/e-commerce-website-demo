import React from "react";
import type { Products } from "../../types/ProductTypes";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue, useSetAtom } from "jotai";
import { wishlistAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
const BestSellerProductsList = ({ products }: { products: Products[] }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const setWishlists = useSetAtom(wishlistAtom);
  const navigate = useNavigate();
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
  return (
    <section className="mt-10 md:mt-17 p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold text-sm md:text-base">
              This Month
            </p>
          </div>
          <h3 className="font-semibold text-2xl md:text-4xl">
            Best Selling Products
          </h3>
        </div>
        <PrimaryCustomButton
          onClick={() => navigate(PRODUCTPAGE)}
        >
          View All
        </PrimaryCustomButton>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-15">
        {products.slice(0, 4).map((product) => (
          <React.Fragment key={product.id}>
            <HomeProductItem
              product={product}
              wishlists={wishlists}
              onAddToWishlist={handleAddToWishlist}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BestSellerProductsList;
