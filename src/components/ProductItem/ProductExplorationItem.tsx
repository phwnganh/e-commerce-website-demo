import HeartIcon1 from "../../assets/heart-small.svg";
import EyeIcon from "../../assets/Eye-icon.svg";
import type { CartItems, Carts, Products } from "../../types/ProductTypes";
import { Link, useNavigate } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { cartAtom, tempCartAtom, userAtom } from "../../atom/store";
import { HOMEPAGE, LOGIN } from "../../constants/route.constants";
import StarRating from "../ui/StarRating";

const ProductExplorationItem = ({
  product,
  wishlists,
  onAddToWishlist,
}: {
  product: Products;
  wishlists: Products[];
  onAddToWishlist: (product: Products) => void;
}) => {
  const navigate = useNavigate();
  const user = useAtomValue(userAtom);
  const setCart = useSetAtom(cartAtom);
  const setTempCart = useSetAtom(tempCartAtom);

  const requireLogin = () => {
    if (!user) {
      navigate(LOGIN);
      return false;
    }
    return true;
  };

  const handleAddToCart = (product: Products) => {
    const saved = localStorage.getItem("carts");
    let currentCarts: Carts = saved
      ? JSON.parse(saved)
      : { id: "1", total: 0, products: [] };

    const existingItem = currentCarts.products.find(
      (item) => item.id === product.id
    );

    let updatedProducts;
    if (existingItem) {
      updatedProducts = currentCarts.products.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      const newItem: CartItems = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        total: product.price,
        thumbnail: product.thumbnail,
      };
      updatedProducts = [...currentCarts.products, newItem];
    }

    const updatedCart = {
      ...currentCarts,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
    };
    setCart(updatedCart);
    setTempCart(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };
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
            <div className="bg-button-1 w-[55px] absolute left-3 top-3 text-center text-xs text-text-1 rounded-sm py-1 px-3">
              NEW
            </div>
          )}
          <img
            src={product.images[0]}
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

        <div className="flex flex-col gap-1 md:gap-2 absolute top-1 right-2 md:top-3 md:right-3 ">
          <button
            onClick={() => {
              if (!requireLogin()) {
                return;
              }
              onAddToWishlist(product);
            }}
            className={`${
              isInWishlist
                ? "bg-button-2 hover:bg-[#b42424] cursor-pointer"
                : "bg-white hover:bg-gray-200 cursor-pointer"
            }  flex justify-center items-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px]`}
          >
            <img
              src={HeartIcon1}
              alt="heart-icon"
              className={`
                ${isInWishlist ? "brightness-1 invert" : ""}`}
            />
          </button>
          <button
            onClick={() => navigate(`${HOMEPAGE}/${product.id}`)}
            className="bg-white hidden md:flex justify-center items-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px] hover:bg-gray-200 cursor-pointer"
          >
            <img src={EyeIcon} alt="eye-icon"/>
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
