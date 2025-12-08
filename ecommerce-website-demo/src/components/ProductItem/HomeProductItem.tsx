import { useEffect, useState } from "react";
import type { CartItems, Carts, Products } from "../../types/ProductTypes";
import StarRating from "../../components/ui/StarRating";
import HeartIcon from "../../assets/heart-icon.svg";
import EyeIcon from "../../assets/Eye-icon.svg";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
const HomeProductItem = ({
  product,
  wishlists,
  onAddToWishlist,
}: {
  product: Products;
  wishlists: Products[];
  onAddToWishlist: (product: Products) => void;
}) => {
  const navigate = useNavigate();

  const [cartsSaved, setCartsSaved] = useState<Carts>({
    id: "1",
    total: 0,
    discountTotal: 0,
    products: [],
  });

  useEffect(() => {
    const savedCarts = localStorage.getItem("carts");
    if (savedCarts) {
      setCartsSaved(JSON.parse(savedCarts));
    }
  }, []);

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
    setCartsSaved(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };
  const isNew = (() => {
    const createdDate = new Date(product.meta.createdAt);
    const now = new Date();
    const octoberFirstThisYear = new Date(now.getFullYear(), 9, 1);
    return createdDate >= octoberFirstThisYear;
  })();
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-[#F5F5F5] rounded-sm max-w-[270px] w-full relative group">
        {isNew && (
          <div className="bg-[#00FF66] w-[55px] absolute left-3 top-3 text-center text-xs text-[#FAFAFA] rounded-sm py-1 px-3">
            NEW
          </div>
        )}
        <img
          src={product.images[0]}
          alt="product-imgs"
          className="w-full h-full"
        />
        <div className="flex flex-col gap-1 md:gap-2 absolute top-1 right-2 md:top-3 md:right-3 ">
          <button
            onClick={() => onAddToWishlist(product)}
            className={`${
              wishlists.some((item) => item.id === product.id)
                ? "bg-[#DB4444] hover:bg-[#b42424]"
                : "bg-white hover:bg-gray-200"
            }  flex justify-center rounded-full w-6 h-6 p-1.5 md:w-8 md:h-8 md:p-2.5`}
          >
            <img
              src={HeartIcon}
              alt="heart-icon"
              className={`
                ${
                  wishlists.some((item) => item.id === product.id)
                    ? "brightness-1 invert"
                    : ""
                } w-3 h-3 sm:w-4 sm:h-4`}
            />
          </button>
          <button
            onClick={() => navigate(`${HOMEPAGE}/${product.id}`)}
            className="bg-white flex justify-center rounded-full w-6 h-6 p-1.5 md:w-8 md:h-8 md:p-2.5 hover:bg-gray-200"
          >
            <img
              src={EyeIcon}
              alt="eye-icon"
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </button>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className="absolute w-full bottom-0 bg-black text-white font-medium text-center text-xs md:text-sm py-1 md:py-2 rounded-bl-sm rounded-br-sm hidden group-hover:block"
        >
          Add to Cart
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xs md:text-base line-clamp-1">
          {product.title}
        </p>
        <div className="flex flex-row gap-3">
          <p className="font-medium text-[#DB4444] text-xs md:text-base">
            ${(product.price * 0.5).toFixed(2)}
          </p>
          <p className="font-medium opacity-50 line-through text-xs md:text-base">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <StarRating rating={product.rating} size="sm"></StarRating>
      </div>
    </div>
  );
};

export default HomeProductItem;
