import Hero from "../../assets/hero-banner.jpg";
import arrowRight from "../../assets/arrow-right.svg";
import AppleIcon from "../../assets/apple-icon.png";
const HeroBanner = () => {
  return (
    <div className="mt-10 bg-black text-text-1 w-full lg:w-auto">
      <div className="flex flex-row items-center">
        <div className="lg:ml-16 ml-6 py-6 lg:py-0">
          <div className="flex flex-row gap-6 items-center">
            <div className="w-10 h-12">
              <img src={AppleIcon} alt="apple-icon" loading="lazy" />
            </div>
            <p className="text-sm sm:text-base">iPhone 14 Series</p>
          </div>
          <div className="lg:text-5xl md:text-4xl text-3xl font-semibold mt-5">Up to 10% off Voucher</div>
          <div className="flex flex-row gap-2 items-center mt-5.5">
            <p className="border-b text-sm md:text-base">Shop Now</p>
            <div className="cursor-pointer">
              <img src={arrowRight} alt="arrow-right" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-124 mt-4">
          <img src={Hero} alt="hero-banner" loading="lazy" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
