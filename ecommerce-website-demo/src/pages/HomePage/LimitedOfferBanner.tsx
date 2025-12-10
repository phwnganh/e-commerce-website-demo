import BlutetoothSpeaker from "../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
const LimitedOfferBanner = () => {
  return (
    <section className="mt-35 bg-black">
      <div className="flex flex-col md:flex-row gap-7 items-center p-4 md:p-10">
        <div className="flex flex-col gap-6 md:gap-8 basis-[50%] md:basis-[40%] items-start">
          <p className="text-[#00FF66] font-semibold text-sm md:text-base">
            Categories
          </p>
          <h1 className="text-[#FAFAFA] font-semibold text-3xl md:text-5xl">
            Enhance Your Music Experience
          </h1>
          <div className="flex flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold text-xs md:text-base">23</p>
              <p className="text-[10px] md:text-xs">Hours</p>
            </div>
            <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold text-xs md:text-base">05</p>
              <p className="text-[10px] md:text-xs">Days</p>
            </div>
            <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold text-xs md:text-base">59</p>
              <p className="text-[10px] md:text-xs">Minutes</p>
            </div>
            <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold text-xs md:text-base">35</p>
              <p className="text-[10px] md:text-xs">Seconds</p>
            </div>
          </div>
          <div className="mt-2">
            <PrimaryCustomButton bgColor="#00FF66">Buy Now!</PrimaryCustomButton>
          </div>
        </div>

        <div className="basis-[60%] flex justify-center">
          <img src={BlutetoothSpeaker} alt="bluetooth-speaker-banner" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default LimitedOfferBanner;
