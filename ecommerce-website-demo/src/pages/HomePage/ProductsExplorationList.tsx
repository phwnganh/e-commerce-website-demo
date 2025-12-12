import React, { useEffect, useState } from "react";
import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import type { Products } from "../../types/ProductTypes";

import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue, useSetAtom } from "jotai";
import { wishlistAtom } from "../../atom/store";
import ProductExplorationItem from "../../components/ProductItem/ProductExplorationItem";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
const ProductsExplorationList = ({ products }: { products: Products[] }) => {
  const [itemsPerView, setItemsPerView] = useState(8);
  const [currentIndex, setCurrentIndex] = useState(0);
  const wishlists = useAtomValue(wishlistAtom);
  const setWishlists = useSetAtom(wishlistAtom);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(8);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const totalGroups = Math.ceil(products.length / itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  const startIndex = currentIndex * itemsPerView;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerView);

  return (
    <section className="mt-17 p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold text-sm md:text-base">
              Our Products
            </p>
          </div>
          <h3 className="font-semibold text-2xl md:text-4xl">
            Explore Our Products
          </h3>
        </div>

        <div className="flex flex-row gap-2">
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`bg-[#F5F5F5] rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
          >
            <img src={LeftArrow1} alt="left-arrow" loading="lazy"/>
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === totalGroups - 1}
            className={`bg-[#F5F5F5] rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === totalGroups - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
          >
            <img src={RightArrow} alt="right-arrow" loading="lazy"/>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-15">
        {currentProducts.map((product) => (
          <React.Fragment key={product.id}>
            <ProductExplorationItem
              product={product}
              wishlists={wishlists}
              onAddToWishlist={handleAddToWishlist}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="mt-15 flex justify-center">
        <PrimaryCustomButton
          bgColor={"#DB4444"}
          onClick={() => navigate(PRODUCTPAGE)}
        >
          View All Products
        </PrimaryCustomButton>
      </div>
    </section>
  );
};

export default ProductsExplorationList;
