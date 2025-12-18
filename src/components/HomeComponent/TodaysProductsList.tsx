import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import {useEffect, useRef, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import Countdown from "../../components/ui/TodayProductsCountdown";
import SectionHeader from "../../components/ui/SectionHeader";
const TodaysProductsList = ({ products }: { products: Products[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(4);
  const wishlists = useAtomValue(wishlistAtom);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tính toán tổng số nhóm có thể hiển thị
  const totalGroups = Math.ceil(products.length / itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };
  return (
    <section className="mt-15 md:mt-35 p-4 lg:p-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 sm:gap-0">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-21">
          <div className="flex flex-col gap-4 md:gap-6">
            <SectionHeader title="Today's" />
            <h3 className="font-semibold text-2xl md:text-4xl">Flash Sales</h3>
          </div>

          <Countdown />
        </div>

        <div className="flex flex-row gap-2">
          <button
            className={`bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center  ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
            onClick={goToPrev}
            disabled={currentIndex === 0}
          >
            <img src={LeftArrow1} alt="left-arrow" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === totalGroups - 1}
            className={`bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === totalGroups - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
          >
            <img src={RightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="overflow-x-hidden">
          <div
            ref={containerRef}
            className="flex gap-7 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${-(currentIndex * 100)}%)`,
            }}
          >
            {products.map((product) => (
              <div
                className="shrink-0 w-full sm:w-1/2 md:w-1/4"
                key={product.id}
              >
                <HomeProductItem product={product} wishlists={wishlists} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-15 flex justify-center">
        <PrimaryCustomButton onClick={() => navigate(PRODUCTPAGE)}>
          View All Products
        </PrimaryCustomButton>
      </div>
      <hr className="mt-15 border-t border-t-black-opacity-30" />{" "}
    </section>
  );
};

export default TodaysProductsList;
