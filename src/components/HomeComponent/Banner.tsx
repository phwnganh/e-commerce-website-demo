import CategoriesNavigation from "./CategoriesNavigation";
import { useAtomValue } from "jotai";
import { categoriesNavigationAtom } from "../../atom/store";
import MainHeroBanner from "../../assets/hero-banner.png";
import Iphone16 from "../../assets/iphone-16-advertisment.jpg";
import Iphone13 from "../../assets/iphone-13-advertisement.png";
const Banner = () => {
  const categoriesNavigation = useAtomValue(categoriesNavigationAtom);
  return (
    <section className="flex lg:flex-row md:flex-col flex-col gap-11 px-4 lg:px-0">
      <CategoriesNavigation categories={categoriesNavigation} />
      {/* carousel */}
      <div className="w-full overflow-hidden">
        {/* container */}
        <div className="flex animate-marquee">
          <div className="flex gap-2 mt-10">
            <img
              src={MainHeroBanner}
              alt="main-hero-banner"
              className="max-w-none w-auto h-64 object-cover"
            />
            {/* <HeroBanner/> */}
            <img
              src={Iphone16}
              alt="iphone-16-advertisement"
              className="max-w-none w-auto h-64 object-cover"
            />
            <img
              src={Iphone13}
              alt="iphone-13-advertisement"
              className="max-w-none w-auto h-64 object-cover"
            />
          </div>

          {/* <div className="flex gap-2">
            <img
              src={MainHeroBanner}
              alt="main-hero-banner"
              className="max-w-none w-auto h-64 object-cover"
            />
            <img
              src={Iphone16}
              alt="iphone-16-advertisement"
              className="max-w-none w-auto h-64 object-cover"
            />
            <img
              src={Iphone13}
              alt="iphone-13-advertisement"
              className="max-w-none w-auto h-64 object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
