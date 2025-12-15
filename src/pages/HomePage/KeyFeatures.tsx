import DeliveryIcon from "../../assets/icon-delivery.svg";
import CustomerServiceIcon from "../../assets/Icon-Customer service.svg";
import SecureIcon from "../../assets/Icon-secure.svg";
import CustomRoundedComponent from "../../components/ui/CustomRoundedComponent";
const KeyFeatures = () => {
  return (
    <section className="max-w-[1170px] mx-auto flex justify-center gap-12 md:gap-22 my-17 md:my-35 px-5 lg:px-0">
      <div className="flex flex-col gap-2 items-center">
        <CustomRoundedComponent>
          <img src={DeliveryIcon} alt="delivery-icon" />
        </CustomRoundedComponent>
        <div className="text-base md:text-xl font-semibold mt-4 text-center lg:text-start">
          FREE AND FAST DELIVERY
        </div>
        <div className="text-xs md:text-sm text-center lg:text-start">
          Free delivery for all orders over $140
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <CustomRoundedComponent>
          <img
            src={CustomerServiceIcon}
            alt="customer-service-icon"
          />
        </CustomRoundedComponent>
        <div className="text-base md:text-xl font-semibold mt-4 text-center lg:text-start">
          24/7 CUSTOMER SERVICE
        </div>
        <div className="text-xs md:text-sm text-center lg:text-start">
          Friendly 24/7 customer support
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <CustomRoundedComponent>
          <img src={SecureIcon} alt="secure-icon" />
        </CustomRoundedComponent>
        <div className="text-base md:text-xl font-semibold mt-4 text-center lg:text-start">
          MONEY BACK GUARANTEE
        </div>
        <div className="text-xs md:text-sm text-center lg:text-start">
          We reurn money within 30 days
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
