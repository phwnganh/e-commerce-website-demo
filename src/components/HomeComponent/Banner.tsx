import CategoriesNavigation from "./CategoriesNavigation";
import { useAtomValue } from "jotai";
import { categoriesNavigationAtom } from "../../atom/store";
import MainHeroBanner from "../../assets/hero-banner.png";
import Iphone16 from "../../assets/iphone-16-advertisment.jpg";
import Iphone13 from "../../assets/iphone-13-advertisement.png";
import Iphone16Pro from "../../assets/iphone16pro-banner.webp";
import HeroCarousel from "../CarouselComponent/HeroCarousel";
const Banner = () => {
  const categoriesNavigation = useAtomValue(categoriesNavigationAtom);
  return (
    <section className="flex lg:flex-row gap-11 px-4 lg:px-0">
      <CategoriesNavigation categories={categoriesNavigation} />
      {/* carousel */}
    <HeroCarousel slides={[
      MainHeroBanner,
      Iphone16,
      Iphone13,
      Iphone16Pro
    ]}/>
    </section>
  );
};

export default Banner;
