import HeartIcon1 from "../../assets/heart-small.svg";
import EyeIcon from "../../assets/Eye-icon.svg";
import type { Products } from "../../types/ProductTypes";
import { Link, useNavigate } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "../../atom/store";
import { HOMEPAGE } from "../../constants/route.constants";
import StarRating from "../ui/StarRating";
import { addToCartAtom } from "../../atom/cartActionStore";
import { toggleWishlistAtom } from "../../atom/wishlistActionStore";
import { useLoginRequired } from "../../hooks/useLoginRequired";

const ProductExplorationItem = ({
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
  const requireLogin = useLoginRequired()
  const isNew = (() => {
    const createdDate = new Date(product.meta.createdAt);
    const now = new Date();
    const octoberFirstThisYear = new Date(now.getFullYear(), 9, 1);
    return createdDate >= octoberFirstThisYear;
  })();

  const isInWishlist = user && wishlists.some((item) => item.id === product.id);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-secondary-2 rounded-sm relative">
        <div className="relative group/image">
          {isNew && (
            <div className="bg-button-1 w-10 sm:w-[55px] absolute left-3 top-3 flex justify-center text-center text-[10px] sm:text-xs text-text-1 rounded-sm py-1 px-3">
              NEW
            </div>
          )}
          <img
            src={product.thumbnail}
            alt="product-imgs"
            className="w-full h-full"
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
              isInWishlist
                ? "bg-button-2 hover:bg-hover-button-1 cursor-pointer"
                : "bg-white"
            } group-hover:bg-button-2 cursor-pointer flex justify-center items-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px]`}
          >
            <img
              src={HeartIcon1}
              alt="heart-icon"
              className={`
                ${
                  isInWishlist && "brightness-1 invert"
                } group-hover:brightness-1 group-hover:invert w-4 h-4 sm:w-6 sm:h-6`}
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
        <div className="flex flex-row items-center gap-2">
          <p className="font-medium text-button-2 text-xs md:text-base">
            ${(product.price * 0.5).toFixed(2)}
          </p>
          <StarRating rating={product.rating}></StarRating>
        </div>
      </div>
    </div>
  );
};

export default ProductExplorationItem;
