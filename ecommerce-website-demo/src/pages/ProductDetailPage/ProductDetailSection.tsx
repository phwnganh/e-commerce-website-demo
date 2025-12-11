import type { Products } from "../../types/ProductTypes";
import StarRating from "../../components/ui/StarRating";
import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";
import HeartIcon from "../../assets/Wishlist.svg";
import DeliveryIcon from "../../assets/icon-delivery.svg";
import ReturnDeliveryIcon from "../../assets/Icon-return.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGIN, ACCOUNT, HOMEPAGE } from "../../constants/route.constants";
import { useAtomValue, useSetAtom } from "jotai";
import { userAtom, wishlistAtom } from "../../atom/store";

const ProductDetailSection = ({ productData }: { productData: Products }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const setWishlists = useSetAtom(wishlistAtom);
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();
  const handleAddToWishlist = (product: Products) => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      setWishlists(JSON.parse(saved));
    }
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

  const requireLogin = () => {
    if (!user) {
      navigate(LOGIN);
      return false;
    }
    return true;
  };

  const isInWishlist =
    user && wishlists.some((item) => item.id === productData.id);

  return (
    <section className="mt-20 px-4 lg:px-0">
      <div className="flex flex-row gap-3 items-center">
        <NavLink to={HOMEPAGE} className="opacity-50 text-sm">
          Home
        </NavLink>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <p className="opacity-50 text-sm">{productData.brand}</p>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink
          to={`${HOMEPAGE}/${productData.id}`}
          className={({ isActive }) =>
            `${isActive ? "text-sm" : "text-[#00000080] text-sm"}`
          }
        >
          {productData.title}
        </NavLink>
      </div>

      <div className="mt-15 lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-17.5">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5">
            <div className="flex flex-row lg:flex-col gap-4">
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img
                  src={productData.thumbnail}
                  alt={productData.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img
                  src={productData.thumbnail}
                  alt={productData.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img
                  src={productData.thumbnail}
                  alt={productData.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img
                  src={productData.thumbnail}
                  alt={productData.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="lg:w-[500px] lg:h-[600px] w-full bg-[#F5F5F5] flex justify-center rounded-sm">
              <img src={productData.images[0]} alt={productData.title} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl lg:text-2xl">
              {productData.title}
            </h3>
            <div className="flex flex-row gap-4 items-center">
              <StarRating rating={productData.rating} />
              <div className="-rotate-90 border opacity-50 w-4"></div>
              <p className="opacity-60 text-xs lg:text-sm text-[#00FF66]">
                {productData.availabilityStatus}
              </p>
            </div>
            <h3 className="text-xl lg:text-2xl">${productData.price}</h3>
            <p className="mt-2 text-xs lg:text-sm">{productData.description}</p>
            <hr className="mt-2 border-[#00000080]" />
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
              <div className=" flex flex-row border border-[#00000080] rounded-bl-sm rounded-tl-sm rounded-tr-sm rounded-br-sm">
                <button className="group flex justify-center items-center py-2.5 px-2 border-r-[#00000080] border-r hover:border-[#DB4444] hover:rounded-tl-sm hover:rounded-bl-sm hover:bg-[#DB4444] cursor-pointer">
                  <img
                    src={MinusIcon}
                    alt="minus-icon"
                    className="group-hover:brightness-0 group-hover:invert"
                  />
                </button>
                <div className="py-2 px-[34px] border-r-[#00000080] flex justify-center items-center">
                  <p className="font-medium text-base lg:text-xl">2</p>
                </div>
                <button className="group py-2.5 px-2 flex justify-center border-l border-l-[#00000080] items-center hover:bg-[#DB4444] hover:border-[#DB4444] hover:rounded-tr-sm hover:rounded-br-sm cursor-pointer">
                  <img
                    src={PlusIcon}
                    alt="plus-icon"
                    className="group-hover:brightness-0 group-hover:invert"
                  />
                </button>
              </div>

              <button className="bg-[#DB4444] text-[#FAFAFA] text-nowrap py-3 px-10 lg:py-2.5 lg:px-12 h-full font-medium rounded-sm text-xs lg:text-base cursor-pointer">
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
                  isInWishlist
                    ? "bg-[#DB4444] border-[#DB4444] hover:bg-[#DB4444] hover:border-[#DB4444] cursor-pointer"
                    : "bg-white hover:bg-gray-200 cursor-pointer"
                } group ml-[3px] border border-[#00000080] hover:bg-[#DB4444] hover:border-gray-200 rounded-sm w-10 h-10 flex justify-center items-center`}
              >
                <img
                  src={HeartIcon}
                  alt="heart-icon"
                  className={`${
                    isInWishlist ? "brightness-1 invert" : ""
                  } group-hover:brightness-0 group-hover:invert`}
                />
              </button>
            </div>

            <div className="flex flex-col rounded-sm border border-[#00000080] mt-6">
              <div className="flex flex-row gap-4 items-center pt-4 lg:pt-6 pb-2 lg:pb-4 pl-2 lg:pl-4">
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
              <hr className="border-[#00000080]" />

              <div className="flex flex-row gap-4 items-center pt-2 lg:pt-4 pb-4 lg:pb-6 pl-2 lg:pl-4">
                <div className="flex justify-center items-center">
                  <img src={ReturnDeliveryIcon} alt="return-delivery-icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-sm lg:text-base">
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
