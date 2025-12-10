import { useContext,} from "react";
import CategoriesNavigation from "./CategoriesNavigation";
import HeroBanner from "./HeroBanner";
import { DataContext } from "../../context/GlobalDataContext";

const Banner = () => {
  const { categoriesNavigation } = useContext(DataContext);
  return (
    <section className="flex lg:flex-row md:flex-col flex-col gap-11 p-4 lg:p-0">
      <CategoriesNavigation categories={categoriesNavigation} />
      <HeroBanner />
    </section>
  );
};

export default Banner;
