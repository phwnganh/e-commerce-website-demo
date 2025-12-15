import type { Products } from "../../types/ProductTypes";
import { useSetAtom } from "jotai";
import TrashIcon from "../../assets/icon-delete.svg";
import { addToCartAtom } from "../../atom/actionStore";

const WishlistProductItem = ({
  product,
  onRemoveWishlist,
}: {
  product: Products;
  onRemoveWishlist: (product: Products) => void;
}) => {
  const handleAddToCart = useSetAtom(addToCartAtom)
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-secondary-2 rounded-sm w-full relative">
        <div className="relative group/image">
          <div className="bg-button-2 w-[55px] absolute left-3 top-3 text-center text-xs text-text-1 rounded-sm py-1 px-3">
            {Math.round(product.discountPercentage)}%
          </div>
          <img
            src={product.images[0]}
            alt="product-imgs"
            className="w-full h-full"
          />
          <button
            onClick={() => handleAddToCart(product)}
            className="absolute w-full bottom-0 bg-black text-white font-medium text-center py-2 rounded-bl-sm rounded-br-sm hidden group-hover/image:block cursor-pointer text-xs md:text-sm"
          >
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col gap-1 md:gap-2 absolute top-1 md:top-3 right-2 md:right-3">
          <button
            onClick={() => onRemoveWishlist(product)}
            className="bg-white flex items-center justify-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px] hover:bg-gray-200 cursor-pointer"
          >
            <img src={TrashIcon} alt="trash-icon" className="w-4 h-4 sm:w-6 sm:h-6"/>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xs md:text-base line-clamp-1">
          {product.title}
        </p>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
          <p className="font-medium text-button-2 text-xs md:text-base">
            ${(product.price * 0.5).toFixed(2)}
          </p>
          <p className="font-medium opacity-50 line-through text-xs md:text-base">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductItem;
