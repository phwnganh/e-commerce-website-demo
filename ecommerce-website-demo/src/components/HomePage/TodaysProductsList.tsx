import LeftArrow from "../../assets/icons-arrow-left.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import HeartIcon from "../../assets/heart-icon.svg";
import EyeIcon from "../../assets/Eye-icon.svg";
import Circle from "../../assets/circle.svg";
import { useEffect, useRef, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import StarRating from "../ui/StarRating";
const TodaysProductsList = () => {
  const [todaysProducts, setTodaysProducts] = useState<Products[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_VIEW = 4;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTodaysProducts(res.products));
  }, []);

  // Tính toán tổng số nhóm có thể hiển thị
  const totalGroups = Math.ceil(todaysProducts.length / ITEMS_PER_VIEW);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };
  // Tính toán translateX dựa trên currentIndex
  const translateX = -currentIndex * 100; // % của container
  return (
    <section className="mt-[140px] max-w-[1170px] mx-auto">
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-row items-end gap-21">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
              <p className="text-[#DB4444] font-semibold">Today's</p>
            </div>
            <h3 className="font-semibold text-4xl">Flash Sales</h3>
          </div>

          <div className="flex items-center gap-4.5">
            <div className="">
              <p className="text-xs">Days</p>
              <h3 className="font-bold text-3xl">03</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src={Circle} alt="circle-icon" />
              <img src={Circle} alt="circle-icon" />
            </div>
            <div>
              <p className="text-xs">Hours</p>
              <h3 className="font-bold text-3xl">23</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src={Circle} alt="circle-icon" />
              <img src={Circle} alt="circle-icon" />
            </div>
            <div>
              <p className="text-xs">Minutes</p>
              <h3 className="font-bold text-3xl">19</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src={Circle} alt="circle-icon" />
              <img src={Circle} alt="circle-icon" />
            </div>
            <div>
              <p className="text-xs">Seconds</p>
              <h3 className="font-bold text-3xl">56</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <button
            className={`bg-[#F5F5F5] rounded-full w-12 h-12 flex justify-center items-center transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            onClick={goToPrev}
            disabled={currentIndex === 0}
          >
            <img src={LeftArrow} alt="left-arrow" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === totalGroups - 1}
            className={`bg-[#F5F5F5] rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === totalGroups - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <img src={RightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <div
          ref={containerRef}
          className="flex flex-row gap-7.5 mt-10 transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {todaysProducts.map((product) => (
            <div className="shrink-0 w-1/4" key={product.id}>
              <div className="flex flex-col gap-4">
                <div className="bg-[#F5F5F5] rounded-sm w-[270px] relative">
                  <div className="bg-[#DB4444] w-[55px] absolute left-3 top-3 text-center text-xs text-[#FAFAFA] rounded-sm py-1 px-3">
                    {Math.round(product.discountPercentage)}%
                  </div>
                  <img
                    src={product.images[0]}
                    alt="product-imgs"
                    className="w-full"
                  />
                  <div className="flex flex-col gap-2 absolute top-3 right-3 ">
                    <button className="bg-white flex justify-center rounded-[50%] w-8 h-8 p-2.5">
                      <img src={HeartIcon} alt="heart-icon" />
                    </button>
                    <button className="bg-white flex justify-center rounded-[50%] w-8 h-8 p-2.5">
                      <img src={EyeIcon} alt="eye-icon" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">{product.title}</p>
                  <div className="flex flex-row gap-3">
                    <p className="font-medium text-[#DB4444]">
                      ${(product.price * 0.5).toFixed(2)}
                    </p>
                    <p className="font-medium opacity-50 line-through">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <StarRating rating={product.rating} size="sm"></StarRating>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-15 flex justify-center">
        <button className="bg-[#DB4444] font-medium text-[#FAFAFA] py-4 px-12 rounded-sm">
          View All Products
        </button>
      </div>
      <hr className="mt-15 opacity-30"></hr>
    </section>
  );
};

export default TodaysProductsList;
