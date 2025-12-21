import type { Products } from "../../types/product.type";
import StarRating from "../../components/ui/StarRating";
import PlusIcon from "../../assets/plus-icon.svg";
import MinusIcon from "../../assets/minus-icon.svg";
import HeartIcon from "../../assets/wishlist-icon.svg";
import DeliveryIcon from "../../assets/delivery-icon.svg";
import ReturnDeliveryIcon from "../../assets/return-icon.svg";
import { useAtomValue, useSetAtom } from "jotai";
import { tempCartAtom, userAtom, wishlistAtom } from "../../atom/store";
import { toggleWishlistAtom } from "../../atom/wishlistAction.store";
import { useLoginRequired } from "../../hooks/useLoginRequired";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHECKOUT } from "../../constants/route.constants";

const ProductDetailSection = ({ productData }: { productData: Products }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const user = useAtomValue(userAtom);
  const handleAddToWishlist = useSetAtom(toggleWishlistAtom);
  const [quantity, setQuantity] = useState(1);
  const setTempCart = useSetAtom(tempCartAtom);
  const [isImageSelected, setIsImageSelected] = useState(productData.images[0]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsImageSelected(productData.images[0]);
  }, [productData.id])
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleBuyNow = () => {
    const total = productData.price * quantity;
    setTempCart({
      id: productData.id,
      total: total,
      discountTotal: 0,
      products: [
        {
          id: productData.id,
          title: productData.title,
          price: productData.price,
          quantity: quantity,
          total: total,
          thumbnail: productData.thumbnail,
        },
      ],
    });
    navigate(CHECKOUT);
  };

  const requireLogin = useLoginRequired();

  const isInWishlist =
    user && wishlists.some((item) => item.id === productData.id);

  return (
    <section className="px-4 lg:px-0">
      <div className="mt-15 lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-17.5">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5">
            <div className="flex flex-row lg:flex-col gap-4">
              {productData.images.map((img, index) => (
                <div
                  key={index}
                  className={`lg:w-[170px] aspect-square flex justify-center bg-secondary-2 rounded-sm cursor-pointer ${isImageSelected === img && "ring ring-black-opacity-80"}`}
                  onClick={() => setIsImageSelected(img)}
                >
                  <img
                    src={img}
                    alt={productData.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="lg:w-[500px] aspect-square w-full bg-secondary-2 flex justify-center rounded-sm">
              <img
                src={isImageSelected}
                alt={productData.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl lg:text-2xl">
              {productData.title}
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <StarRating rating={productData.rating} />
              <div className="-rotate-90 border opacity-50 w-4"></div>
              <p className="opacity-60 text-xs lg:text-sm text-button-1">
                {productData.availabilityStatus}
              </p>
            </div>
            <h3 className="text-xl lg:text-2xl">${productData.price}</h3>
            <p className="mt-2 text-xs lg:text-sm">{productData.description}</p>
            <hr className="mt-2 border-black-opacity-80" />
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
              <div className="flex flex-row border border-black-opacity-80 rounded-bl-sm rounded-tl-sm rounded-tr-sm rounded-br-sm">
                <button
                  onClick={handleDecreaseQuantity}
                  className="group flex justify-center items-center py-2.5 px-2 border-r-black-opacity-80 border-r hover:border-button-2 hover:rounded-tl-sm hover:rounded-bl-sm hover:bg-button-2 cursor-pointer"
                >
                  <img
                    src={MinusIcon}
                    alt="minus-icon"
                    className="group-hover:brightness-0 group-hover:invert"
                  />
                </button>
                <div className="py-2 w-20 border-r-black-opacity-80 flex justify-center items-center">
                  <p className="font-medium text-base lg:text-xl">{quantity}</p>
                </div>
                <button
                  onClick={handleIncreaseQuantity}
                  className="group py-2.5 px-2 flex justify-center border-l border-l-black-opacity-80 items-center hover:bg-button-2 hover:border-button-2 hover:rounded-tr-sm hover:rounded-br-sm cursor-pointer"
                >
                  <img
                    src={PlusIcon}
                    alt="plus-icon"
                    className="group-hover:brightness-0 group-hover:invert"
                  />
                </button>
              </div>

              <button onClick={handleBuyNow} className="bg-button-2 hover:bg-hover-button-1 text-text-1 whitespace-nowrap py-3 px-10 lg:py-2.5 lg:px-12 h-full font-medium rounded-sm text-xs lg:text-base cursor-pointer">
                Buy Now
              </button>
              <button
                onClick={() => {
                  if (!requireLogin()) {
                    return;
                  }
                  handleAddToWishlist(productData);
                }}
                className={`${
                  isInWishlist &&
                  "bg-button-2 border-button-2 hover:bg-hover-button-1 hover:border-hover-button-1 cursor-pointer"
                }bg-white cursor-pointer group ml-[3px] border border-black-opacity-80 hover:bg-button-2 hover:border-button-2 rounded-sm w-10 h-10 flex justify-center items-center`}
              >
                <img
                  src={HeartIcon}
                  alt="heart-icon"
                  className={`${
                    isInWishlist && "brightness-1 invert"
                  } group-hover:brightness-0 group-hover:invert`}
                />
              </button>
            </div>

            <div className="flex flex-row md:flex-col rounded-sm border border-black-opacity-80 mt-6">
              <div className="flex-wrap flex flex-row gap-2 sm:gap-4 items-start sm:items-center lg:pt-6 md:pr-0 lg:pb-4 pl-2 lg:pl-4 border-r md:border-0">
                <div className="flex justify-center items-center">
                  <img
                    src={DeliveryIcon}
                    alt="delivery-icon"
                    className="brightness-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-sm lg:text-base">
                    Free Delivery
                  </p>
                  <p className="text-[10px] lg:text-xs font-medium underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr className="md:border-black-opacity-80" />

              <div className="flex-wrap flex flex-row gap-2 sm:gap-4 items-start sm:items-center lg:pt-4 pb-4 lg:pb-6 pl-2 lg:pl-4">
                <div className="flex justify-center items-center">
                  <img src={ReturnDeliveryIcon} alt="return-delivery-icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-sm lg:text-base text-nowrap">
                    Return Delivery
                  </p>
                  <p className="text-[10px] lg:text-xs font-medium">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
