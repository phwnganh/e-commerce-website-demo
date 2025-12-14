import AdvertisementBanner from "./AdvertisementBanner";
import MainNavigation from "./MainNavigation";

const PostLoginHeaderSection = () => {
  return (
    <header className="">
      <div className="bg-black">
        <AdvertisementBanner />
      </div>
      <div className="max-w-[1170px] mx-auto mt-10">
        <MainNavigation />
      </div>
            <hr className="mt-4 border-t border-t-black-opacity-30" />

    </header>
  );
};

export default PostLoginHeaderSection;
