import LeftArrow from "../../assets/icons-arrow-left.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import Cosmetics from "../../assets/cosmetics.png";
import { useEffect, useState } from "react";
import type { Categorys } from "../../types/CategoryType";
const CategoriesList = () => {
  const [categories, setCategories] = useState<Categorys[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  const displayedCategories = categories.slice(0, 6);
  return (
    <section className="mt-20 max-w-[1170px] mx-auto">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold">Categories</p>
          </div>
          <h3 className="font-semibold text-4xl">Browse By Category</h3>
        </div>

        <div className="flex flex-row gap-2">
          <button className="bg-[#F5F5F5] rounded-[50%] w-12 h-12 flex justify-center items-center">
            <img src={LeftArrow} alt="left-arrow" />
          </button>
          <button className="bg-[#F5F5F5] rounded-[50%] w-12 h-12 flex justify-center items-center">
            <img src={RightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>

      <div className="mt-15 flex flex-row gap-7 overflow-x-scroll">
        {displayedCategories.map((category, index) => (
          <div
            className="flex flex-col gap-4 border-2 justify-center items-center rounded-sm border-[#0000004D] w-[170px] py-6 px-14"
            key={index}
          >
            <div className="w-14 h-14">
              <img src={Cosmetics} alt="" />
            </div>
            <p className="text-center">{category.name}</p>
          </div>
        ))}
      </div>
      <hr className="mt-15 opacity-30"></hr>
    </section>
  );
};

export default CategoriesList;
