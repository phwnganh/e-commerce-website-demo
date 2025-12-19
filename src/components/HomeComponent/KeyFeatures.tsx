import DeliveryIcon from "../../assets/delivery-icon.svg";
import CustomerServiceIcon from "../../assets/customer-service-icon.svg";
import SecureIcon from "../../assets/secure-icon.svg";
import CustomRoundedComponent from "../../components/ui/CustomRoundedComponent";
const KeyFeatures = () => {
  const KEY_FEATURES = [
    {
      icon: DeliveryIcon,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    },
    {
      icon: CustomerServiceIcon,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
    },
    {
      icon: SecureIcon,
      title: "MONEY BACK GUARANTEE",
      desc: "We reurn money within 30 days",
    },
  ];
  return (
    <section className="flex flex-col sm:flex-row justify-center gap-12 md:gap-22 my-17 md:my-35 px-4 lg:px-0">
      {KEY_FEATURES.map((feature, index) => (
        <div className="flex flex-col gap-2 items-center" key={index}>
          <CustomRoundedComponent>
            <img src={feature.icon} alt={feature.title} />
          </CustomRoundedComponent>
          <div className="text-base md:text-xl font-semibold mt-4 text-center lg:text-start">
            {feature.title}
          </div>
          <div className="text-xs md:text-sm text-center lg:text-start">
            {feature.desc}
          </div>
        </div>
      ))}
    </section>
  );
};

export default KeyFeatures;
