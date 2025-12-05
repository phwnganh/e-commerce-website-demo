import DeliveryIcon from "../../assets/icon-delivery.svg";
import CustomerServiceIcon from "../../assets/Icon-Customer service.svg";
import SecureIcon from "../../assets/Icon-secure.svg";
const KeyFeatures = () => {
  return (
    <div className="max-w-[1170px] mx-auto flex justify-center gap-22 mt-35">
      <div className="flex flex-col gap-2 items-center">
        <div className="rounded-[50%] bg-[#2F2E30] p-3 w-20 h-20">
          <div className="rounded-[50%] bg-black p-2">
            <div className="w-10 h-10 flex justify-center items-center">
              <img src={DeliveryIcon} alt="delivery-icon" />
            </div>
          </div>
        </div>
        <div className="text-xl font-semibold mt-4">FREE AND FAST DELIVERY</div>
        <div className="text-sm">Free delivery for all orders over $140</div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="rounded-[50%] bg-[#2F2E30] p-3 w-20 h-20">
          <div className="rounded-[50%] bg-black p-2">
            <div className="w-10 h-10 flex justify-center items-center">
              <img src={CustomerServiceIcon} alt="customer-service-icon" />
            </div>
          </div>
        </div>
        <div className="text-xl font-semibold mt-4">24/7 CUSTOMER SERVICE</div>
        <div className="text-sm">Friendly 24/7 customer support</div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="rounded-[50%] bg-[#2F2E30] p-3 w-20 h-20">
          <div className="rounded-[50%] bg-black p-2">
            <div className="w-10 h-10 flex justify-center items-center">
              <img src={SecureIcon} alt="secure-icon" />
            </div>
          </div>
        </div>
        <div className="text-xl font-semibold mt-4">MONEY BACK GUARANTEE</div>
        <div className="text-sm">We reurn money within 30 days</div>
      </div>
    </div>
  );
};

export default KeyFeatures;
