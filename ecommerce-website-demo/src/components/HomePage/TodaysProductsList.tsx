import LeftArrow from "../../assets/icons-arrow-left.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import { useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import StarRating from "../ui/StarRating";
const TodaysProductsList = () => {
  const [todaysProducts, setTodaysProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTodaysProducts(res.products));
  }, []);
  return (
    <section className="mt-[140px] max-w-[1170px] mx-auto">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold">Today's</p>
          </div>
          <h3 className="font-semibold text-4xl">Flash Sales</h3>
        </div>

        <div className="grid grid-cols-4 gap-9.5">
          <div>
            <p className="text-xs">Days</p>
            <h3 className="font-bold text-3xl">03</h3>
          </div>
          <div>
            <p className="text-xs">Hours</p>
            <h3 className="font-bold text-3xl">23</h3>
          </div>
          <div>
            <p className="text-xs">Minutes</p>
            <h3 className="font-bold text-3xl">19</h3>
          </div>
          <div>
            <p className="text-xs">Seconds</p>
            <h3 className="font-bold text-3xl">56</h3>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="bg-[#F5F5F5] rounded-[50%] w-11.5 h-11.5">
            <img src={LeftArrow} alt="left-arrow" />
          </div>
          <div className="bg-[#F5F5F5] rounded-[50%] w-11.5 h-11.5">
            <img src={RightArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
      {/* <div className="overflow-x-auto"> */}
      <div className="flex flex-row gap-7.5 mt-10">
        {todaysProducts.map((product, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div className="bg-[#F5F5F5] rounded-sm w-[270px]">
              <img
                src={product.images[0]}
                alt="product-imgs"
                className="w-full"
              />
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
        ))}
      </div>
      {/* </div> */}
    </section>
  );
};

export default TodaysProductsList;
