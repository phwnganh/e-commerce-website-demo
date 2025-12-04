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
    </header>
  );
};

export default PostLoginHeaderSection;
