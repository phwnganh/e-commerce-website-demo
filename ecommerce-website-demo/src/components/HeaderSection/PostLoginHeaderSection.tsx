import AdvertisementBanner from "./AdvertisementBanner";
import MainNavigation from "./MainNavigation";

const PostLoginHeaderSection = () => {
  return (
    <header>
      <div className="bg-black">
        <AdvertisementBanner />
      </div>
      <div className="max-w-[1170px] mx-auto mt-10">
        <MainNavigation />
      </div>
      <hr className="mt-4 border-[0.5px] border-[#0000004D]" />
    </header>
  );
};

export default PostLoginHeaderSection;
