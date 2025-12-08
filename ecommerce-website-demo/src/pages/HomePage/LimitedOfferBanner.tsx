import BlutetoothSpeaker from "../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
const LimitedOfferBanner = () => {
  return (
    <section className="max-w-[1170px] mx-auto mt-35 bg-black p-4 lg:p-0">
      <div className="flex flex-row gap-7 items-center p-10">
        <div className="flex flex-col gap-8 basis-[40%] items-start">
          <p className="text-[#00FF66] font-semibold">Categories</p>
          <h1 className="text-[#FAFAFA] font-semibold text-5xl">
            Enhance Your Music Experience
          </h1>
          <div className="flex flex-row gap-6">
            <div className="rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold">23</p>
              <p className="text-xs">Hours</p>
            </div>
            <div className="rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold">05</p>
              <p className="text-xs">Days</p>
            </div>
            <div className="rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold">59</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="rounded-full bg-white w-[62px] h-[62px] flex flex-col justify-center items-center">
              <p className="font-semibold">35</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>

          <button className="mt-2 bg-[#00FF66] text-[#FAFAFA] rounded-sm py-4 px-12">
            Buy Now!
          </button>
        </div>

        <div className="basis-[60%]">
          <img src={BlutetoothSpeaker} alt="bluetooth-speaker-banner" />
        </div>
      </div>
    </section>
  );
};

export default LimitedOfferBanner;
