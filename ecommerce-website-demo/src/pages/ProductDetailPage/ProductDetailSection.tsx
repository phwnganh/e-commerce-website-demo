import type { Products } from "../../types/ProductTypes";
import StarRating from "../../components/ui/StarRating";
import PlusIcon from "../../assets/plus-icon.svg";
import HeartIcon from "../../assets/heart-icon.svg";
import DeliveryIcon from "../../assets/icon-delivery.svg";
import ReturnDeliveryIcon from "../../assets/Icon-return.svg";

const ProductDetailSection = ({ productData }: { productData: Products }) => {
  return (
    <section className="mt-20 max-w-[1170px] mx-auto">
      <div className="flex flex-row gap-3 items-center">
        <p className="opacity-50 text-sm">Account</p>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <p className="opacity-50 text-sm">{productData.brand}</p>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <p className="text-sm">{productData.title}</p>
      </div>

      <div className="mt-20">
        <div className="flex flex-row gap-17.5">
          <div className="flex flex-row gap-7.5">
            <div className="flex flex-col gap-4">
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img src={productData.thumbnail} alt="" />
              </div>
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img src={productData.thumbnail} alt="" />
              </div>
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img src={productData.thumbnail} alt="" />
              </div>
              <div className="w-[170px] h-[138px] flex justify-center bg-[#F5F5F5] rounded-sm">
                <img src={productData.thumbnail} alt="" />
              </div>
            </div>
            <div className="w-[500px] h-[600px] bg-[#F5F5F5] flex justify-center rounded-sm">
              <img src={productData.images[0]} alt={productData.title} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-2xl">{productData.title}</h3>
            <div className="flex flex-row gap-4 items-center">
              <StarRating rating={productData.rating} size="sm" />
              <div className="-rotate-90 border opacity-50 w-4"></div>
              <p className="opacity-60 text-sm text-[#00FF66]">
                {productData.availabilityStatus}
              </p>
            </div>
            <h3 className="text-2xl">${productData.price}</h3>
            <p className="mt-2 text-sm">{productData.description}</p>
            <hr className="mt-2 opacity-50" />
            <div className="flex flex-row gap-4 items-end">
              <div className="mt-2 flex flex-row border rounded-bl-sm rounded-tl-sm rounded-tr-sm rounded-br-sm">
                <div className="h-11 w-10 py-[22px] px-3 border-r">
                  <div className="border-[1.5px] w-4"></div>
                </div>
                <div className="h-11 w-20 py-2 px-[34px] border-r">
                  <p className="font-medium text-xl">2</p>
                </div>
                <div className="h-11 w-10 py-3.5 px-3">
                  <img
                    src={PlusIcon}
                    alt="plus-icon"
                    className="brightness-1"
                  />
                </div>
              </div>

              <button className="bg-[#DB4444] text-[#FAFAFA] text-nowrap py-2.5 px-12 h-11 font-medium rounded-sm">
                Buy Now
              </button>
              <button className="ml-[3px] border border-[#00000080] rounded-sm w-10 h-10 flex justify-center items-center">
                <img src={HeartIcon} alt="heart-icon" />
              </button>
            </div>

            <div className="flex flex-col rounded-sm border border-[#00000080] mt-6">
              <div className="flex flex-row gap-4 items-center pt-6 pr-[51px] pb-4 pl-4">
                <div className="w-10 h-10 flex justify-center">
                  <img
                    src={DeliveryIcon}
                    alt="delivery-icon"
                    className="brightness-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs font-medium underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr />

              <div className="flex flex-row gap-4 items-center pt-4 pb-6 pl-4">
                <div className="w-10 h-10 flex justify-center">
                  <img src={ReturnDeliveryIcon} alt="return-delivery-icon" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-xs font-medium">
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
