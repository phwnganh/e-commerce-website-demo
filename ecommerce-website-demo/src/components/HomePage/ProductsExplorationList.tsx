import { useEffect, useState } from "react";
import LeftArrow from "../../assets/icons-arrow-left.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import type { Products } from "../../types/ProductTypes";
import StarRating from "../ui/StarRating";
import HeartIcon from "../../assets/heart-icon.svg";
import EyeIcon from "../../assets/Eye-icon.svg";
const ProductsExplorationList = () => {
  const [exploratedProducts, setExploratedProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setExploratedProducts(res.products));
  }, []);
  return (
    <section className="mt-17 max-w-[1170px] mx-auto">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold">Our Products</p>
          </div>
          <h3 className="font-semibold text-4xl">Explore Our Products</h3>
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

      <div className="grid grid-cols-4 gap-7 mt-15">
        {exploratedProducts.slice(0, 8).map((product) => {
          const isNew = (() => {
            const createdDate = new Date(product.meta.createdAt);
            const now = new Date();
            const octoberFirstThisYear = new Date(now.getFullYear(), 9, 1);
            return createdDate >= octoberFirstThisYear;
          })();
          return (
            <div className="flex flex-col gap-4" key={product.id}>
              <div className="bg-[#F5F5F5] rounded-sm w-[270px] relative">
                {isNew && (
                  <div className="bg-[#00FF66] w-[55px] absolute left-3 top-3 text-center text-xs text-[#FAFAFA] rounded-sm py-1 px-3">
                    NEW
                  </div>
                )}

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
          );
        })}
      </div>

      <div className="mt-15 flex justify-center">
        <button className="bg-[#DB4444] font-medium text-[#FAFAFA] py-4 px-12 rounded-sm">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductsExplorationList;
