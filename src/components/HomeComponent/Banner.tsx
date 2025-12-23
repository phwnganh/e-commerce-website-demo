import CategoriesNavigation from "./CategoriesNavigation";
import HeroBanner from "./HeroBanner";
import { useAtomValue } from "jotai";
import { categoriesNavigationAtom } from "../../atom/store";

const Banner = () => {
  const categoriesNavigation = useAtomValue(categoriesNavigationAtom);
  return (
    <section className="flex lg:flex-row md:flex-col flex-col gap-11 p-4 lg:p-0">
      <CategoriesNavigation categories={categoriesNavigation} />
        <HeroBanner />
    </section>
  );
};

export default Banner;
