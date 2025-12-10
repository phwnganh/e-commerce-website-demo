import { useEffect, useState } from "react";
import CategoriesNavigation from "./CategoriesNavigation";
import HeroBanner from "./HeroBanner";

const Banner = () => {
  const [categoriesNavigation, setCategoriesNavigation] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((res) => setCategoriesNavigation(res));
  }, []);
  return (
    <section className="flex lg:flex-row md:flex-col flex-col gap-11 p-4 lg:p-0">
      <CategoriesNavigation categories={categoriesNavigation} />
      <HeroBanner />
    </section>
  );
};

export default Banner;
