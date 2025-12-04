import Hero from "../../assets/hero-banner.jpg";
import arrowRight from "../../assets/arrow-right.svg";
import AppleIcon from "../../assets/apple-icon.png";
const HeroBanner = () => {
  return (
    <div className="mt-10 bg-black text-[#FAFAFA]">
      <div className="flex flex-row items-center">
        <div className="ml-16">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-10 h-12">
              <img src={AppleIcon} alt="apple-icon" />
            </div>
            <p>iPhone 14 Series</p>
          </div>
          <div className="text-5xl font-semibold mt-5">Up to 10% off Voucher</div>
          <div className="flex flex-row gap-2 items-center mt-5.5">
            <p className="border-b">Shop Now</p>
            <div>
              <img src={arrowRight} alt="arrow-right" />
            </div>
          </div>
        </div>
        <div className="w-124">
          <img src={Hero} alt="hero-banner" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
