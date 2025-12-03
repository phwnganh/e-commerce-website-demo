const AdvertisementBanner = () => {
  return (
    <div className="max-w-[1190px] mx-auto text-[#FAFAFA] flex flex-row justify-between py-3">
      <div></div>
      <div className="flex gap-2 flex-row">
        <p className="text-sm font-normal">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p className="text-sm font-semibold">ShopNow</p>
      </div>
      <div className="flex gap-2 items-center">
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
    </div>
  );
};

export default AdvertisementBanner;
