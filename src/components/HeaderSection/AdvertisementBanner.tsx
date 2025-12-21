import ArrowDownIcon from "../icons/ArrowDownIcon";

const AdvertisementBanner = () => {
  return (
    <section className="max-w-[1170px] mx-auto text-text-1 flex flex-row justify-between py-3.5">
      <div className="hidden lg:block"></div>
      <div className="flex gap-2 flex-col text-center sm:flex-row sm:items-center sm:justify-center">
        <p className="text-xs sm:text-sm font-normal">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p className="text-xs sm:text-sm font-semibold underline">ShopNow</p>
      </div>
      <div className="hidden sm:flex gap-1 items-center">
        <p className="text-sm">English</p>
        <ArrowDownIcon />
      </div>
    </section>
  );
};

export default AdvertisementBanner;
