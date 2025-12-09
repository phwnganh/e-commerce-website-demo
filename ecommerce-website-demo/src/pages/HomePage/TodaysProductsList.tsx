import LeftArrow from "../../assets/icons-arrow-left.svg";
import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import Circle from "../../assets/circle.svg";
import React, { useEffect, useRef, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import CustomButton from "../../components/ui/CustomButton";
const TodaysProductsList = ({ products }: { products: Products[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [wishlists, setWishlists] = useState<Products[]>([]);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const firstItem = containerRef.current.children[0] as HTMLElement;
      if (firstItem) {
        const style = window.getComputedStyle(firstItem);
        const gap = parseFloat(style.marginRight);
        setItemWidth(firstItem.offsetWidth + gap);
      }
    }
  }, [products]);

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

  // Tính toán tổng số nhóm có thể hiển thị
  const totalGroups = Math.ceil(products.length / itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };
  // Tính toán translateX dựa trên currentIndex
  const translateX = -(currentIndex * itemWidth * itemsPerView); // % của container
  return (
    <section className="mt-15 md:mt-35 max-w-[1170px] mx-auto p-4 lg:p-0">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-21">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
              <p className="text-[#DB4444] font-semibold text-sm md:text-base">
                Today's
              </p>
            </div>
            <h3 className="font-semibold text-2xl md:text-4xl">Flash Sales</h3>
          </div>

          <div className="flex items-center gap-4.5">
            <div className="">
              <p className="text-xs">Days</p>
              <h3 className="font-bold text-xl md:text-3xl">03</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src={Circle} alt="circle-icon" />
              <img src={Circle} alt="circle-icon" />
            </div>
            <div>
              <p className="text-xs">Hours</p>
              <h3 className="font-bold text-xl md:text-3xl">23</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src={Circle} alt="circle-icon" />
              <img src={Circle} alt="circle-icon" />
            </div>
            <div>
              <p className="text-xs">Minutes</p>
              <h3 className="font-bold text-xl md:text-3xl">19</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src={Circle} alt="circle-icon" />
              <img src={Circle} alt="circle-icon" />
            </div>
            <div>
              <p className="text-xs">Seconds</p>
              <h3 className="font-bold text-xl md:text-3xl">56</h3>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row gap-2 hidden">
          <button
            className={`bg-[#F5F5F5] rounded-full w-12 h-12 flex justify-center items-center transition-all  ${
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
            className={`bg-[#F5F5F5] rounded-full w-12 h-12 flex justify-center items-center ${
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
        <div className="hidden md:block overflow-hidden">
          <div
            ref={containerRef}
            className="flex flex-row gap-7.5 transition-transform duration-1000 ease-in-out"
            style={{
              width: "max-content",
              transform: `translateX(${translateX}px)`,
            }}
          >
            {products.map((product) => (
              <React.Fragment key={product.id}>
                <HomeProductItem
                  product={product}
                  wishlists={wishlists}
                  onAddToWishlist={handleAddToWishlist}
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex md:hidden overflow-x-auto gap-7.5 no-scrollbar">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <HomeProductItem
                product={product}
                wishlists={wishlists}
                onAddToWishlist={handleAddToWishlist}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mt-15 flex justify-center">
        <CustomButton bgColor="#DB4444">View All Products</CustomButton>
      </div>
      <hr className="mt-15 border-[0.5px] border-[#0000004D]" />{" "}
    </section>
  );
};

export default TodaysProductsList;
