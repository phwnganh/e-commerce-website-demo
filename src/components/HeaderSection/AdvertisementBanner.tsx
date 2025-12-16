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
        <svg
          className="w-3 h-3 text-white rotate-90"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default AdvertisementBanner;
