import AdvertisementBanner from "./AdvertisementBanner";
import MainNavigation from "./MainNavigation";

const HeaderSection = () => {
  return (
    <header className="">
      <div className="bg-black">
        <AdvertisementBanner />
      </div>
      <div className="max-w-[1190px] mx-auto mt-10">
        <MainNavigation />
      </div>
    </header>
  );
};

export default HeaderSection;
