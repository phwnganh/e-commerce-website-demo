import BlutetoothSpeaker from "../../assets/bluetooth-speaker.png";
import LimitedBannerCustomButton from "../../components/ui/LimitedBannerCustomButton";
import LimitedOfferBannerCountdown from "../../components/ui/LimitedOfferBannerCountdown";
const LimitedOfferBanner = () => {
  return (
    <section className="mt-35 bg-black">
      <div className="flex flex-col md:flex-row gap-7 items-center p-4 md:p-10">
        <div className="flex flex-col gap-6 md:gap-8 basis-[50%] md:basis-[40%] items-start">
          <p className="text-button-1 font-semibold text-sm md:text-base">
            Categories
          </p>
          <h1 className="text-text-1 font-semibold text-3xl md:text-5xl">
            Enhance Your Music Experience
          </h1>
          <LimitedOfferBannerCountdown />
          <div className="mt-2">
            <LimitedBannerCustomButton>Buy Now!</LimitedBannerCustomButton>
          </div>
        </div>

        <div className="basis-[60%] flex justify-center">
          <img
            src={BlutetoothSpeaker}
            alt="bluetooth-speaker-banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LimitedOfferBanner;
