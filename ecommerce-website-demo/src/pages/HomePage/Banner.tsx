import CategoriesNavigation from "./CategoriesNavigation";
import HeroBanner from "./HeroBanner";

const Banner = () => {
  return (
    <section className="max-w-[1170px] mx-auto flex lg:flex-row md:flex-col flex-col gap-11 p-4 lg:p-0">
      <CategoriesNavigation />
      <HeroBanner />
    </section>
  );
};

export default Banner;
