import type {Products } from "../../types/ProductTypes";
import StarRating from "../../components/ui/StarRating";
import HeartIcon1 from "../../assets/heart-small.svg";
import EyeIcon from "../../assets/Eye-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { HOMEPAGE, LOGIN } from "../../constants/route.constants";
import { useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "../../atom/store";
import { addToCartAtom, toggleWishlistAtom } from "../../atom/actionStore";
const HomeProductItem = ({
  product,
  wishlists,
}: {
  product: Products;
  wishlists: Products[];
}) => {
  const navigate = useNavigate();
  const user = useAtomValue(userAtom);
  const onAddToWishlist = useSetAtom(toggleWishlistAtom)
  const handleAddToCart = useSetAtom(addToCartAtom)
  const requireLogin = () => {
    if (!user) {
      navigate(LOGIN);
      return false;
    }
    return true;
  };

  const isInWishlist = user && wishlists.some((item) => item.id === product.id);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-secondary-2 rounded-sm w-full relative">
        <div className="relative aspect-square group/image">
          <div className="bg-button-2 w-10 sm:w-[55px] absolute left-3 top-3 flex justify-center text-center text-[10px] sm:text-xs text-text-1 rounded-sm py-1 px-3">
            -{Math.round(product.discountPercentage)}%
          </div>
          <img
            src={product.thumbnail}
            alt="product-imgs"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => {
              if (!requireLogin()) {
                return;
              }
              handleAddToCart(product);
            }}
            className="absolute w-full bottom-0 bg-black text-white font-medium text-center text-xs md:text-sm py-1 md:py-2 rounded-bl-sm rounded-br-sm hidden group-hover/image:block cursor-pointer"
          >
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col gap-1 md:gap-2 absolute top-1 right-2 md:top-3 md:right-3 group">
          <button
            onClick={() => {
              if (!requireLogin()) {
                return;
              }
              onAddToWishlist(product);
            }}
            className={`${
              isInWishlist ?
              "bg-button-2 hover:bg-hover-button-1 cursor-pointer" : "bg-white"
            } group-hover:bg-button-2 cursor-pointer flex justify-center items-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px]`}
          >
            <img
              src={HeartIcon1}
              alt="heart-icon"
              className={`
                ${
                  isInWishlist && "brightness-1 invert"
                } w-4 h-4 sm:w-6 sm:h-6 group-hover:brightness-1 group-hover:invert`}
            />
          </button>
          <button
            onClick={() => navigate(`${HOMEPAGE}/${product.id}`)}
            className="bg-white flex justify-center items-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px] hover:bg-gray-200 cursor-pointer"
          >
            <img
              src={EyeIcon}
              alt="eye-icon"
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to={`${HOMEPAGE}/${product.id}`}
          className="font-medium text-xs md:text-base line-clamp-1"
        >
          {product.title}
        </Link>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
          <p className="font-medium text-button-2 text-xs md:text-base">
            ${(product.price * 0.5).toFixed(2)}
          </p>
          <p className="font-medium opacity-50 line-through text-xs md:text-base">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <StarRating rating={product.rating}></StarRating>
      </div>
    </div>
  );
};

export default HomeProductItem;
