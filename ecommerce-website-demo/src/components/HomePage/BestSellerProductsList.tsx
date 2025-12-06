import { useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import StarRating from "../ui/StarRating";
import HeartIcon from "../../assets/heart-icon.svg";
import EyeIcon from "../../assets/Eye-icon.svg";
const BestSellerProductsList = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState<Products[]>([]);
  const [wishlists, setWishlists] = useState<Products[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setBestSellerProducts(res.products));
  }, []);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlists(JSON.parse(savedWishlist));
    }
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
  return (
    <section className="mt-17 max-w-[1170px] mx-auto">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold">This Month</p>
          </div>
          <h3 className="font-semibold text-4xl">Best Selling Products</h3>
        </div>

        <button className="bg-[#DB4444] text-[#FAFAFA] py-4 px-12 rounded-sm">
          View All
        </button>
      </div>

      <div className="grid grid-cols-4 gap-7 mt-15">
        {bestSellerProducts.slice(0, 4).map((product) => (
          <div className="flex flex-col gap-4" key={product.id}>
            <div className="bg-[#F5F5F5] rounded-sm w-[270px] relative">
              <img
                src={product.images[0]}
                alt="product-imgs"
                className="w-full"
              />
              <div className="flex flex-col gap-2 absolute top-3 right-3 ">
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className={`${
                    wishlists.some((item) => item.id === product.id)
                      ? "bg-[#DB4444] hover:bg-[#b42424]"
                      : "bg-white hover:bg-gray-200"
                  }  flex justify-center rounded-full w-8 h-8 p-2.5  `}
                >
                  <img
                    src={HeartIcon}
                    alt="heart-icon"
                    className={
                      wishlists.some((item) => item.id === product.id)
                        ? "brightness-1 invert"
                        : ""
                    }
                  />
                </button>
                <button className="bg-white flex justify-center rounded-[50%] w-8 h-8 p-2.5 hover:bg-gray-200">
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
        ))}
      </div>
    </section>
  );
};

export default BestSellerProductsList;
