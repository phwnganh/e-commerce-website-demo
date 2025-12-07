import StarRating from "../../components/ui/StarRating";
import EyeIcon from "../../assets/Eye-icon.svg";
import { useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import HeartIcon from "../../assets/heart-icon.svg";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";

const RelatedItemSection = () => {
  const [todaysProducts, setTodaysProducts] = useState<Products[]>([]);
  const [wishlists, setWishlists] = useState<Products[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTodaysProducts(res.products));
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
    <section className="my-35 mx-auto max-w-[1170px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
          <p className="font-semibold text-[#DB4444]">Related Item</p>
        </div>
      </div>

      <div className="mt-15 grid grid-cols-4 gap-7">
        {todaysProducts.slice(0, 4).map((product) => (
          <div className="flex flex-col gap-4" key={product.id}>
            <div className="bg-[#F5F5F5] rounded-sm w-[270px] relative group">
              <div className="bg-[#DB4444] w-[55px] absolute left-3 top-3 text-center text-xs text-[#FAFAFA] rounded-sm py-1 px-3">
                {Math.round(product.discountPercentage)}%
              </div>
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
                <button
                  className="bg-white flex justify-center rounded-full w-8 h-8 p-2.5 hover:bg-gray-200"
                  onClick={() => navigate(`${HOMEPAGE}/${product.id}`)}
                >
                  <img src={EyeIcon} alt="eye-icon" />
                </button>
              </div>
              <button className="absolute w-full bottom-0 bg-black text-white font-medium text-center py-2 rounded-bl-sm rounded-br-sm hidden group-hover:block">
                Add to Cart
              </button>
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

export default RelatedItemSection;
