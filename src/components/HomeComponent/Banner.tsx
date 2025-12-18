import CategoriesNavigation from "./CategoriesNavigation";
import HeroBanner from "./HeroBanner";
import { useAtomValue, useSetAtom } from "jotai";
import { categoriesNavigationAtom } from "../../atom/store";
import { useEffect } from "react";

const Banner = () => {
  const categoriesNavigation = useAtomValue(categoriesNavigationAtom);
  const setCategoriesNavigation = useSetAtom(categoriesNavigationAtom);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((res) => {
        setCategoriesNavigation(res);
      });
  }, []);
  return (
    <section className="flex lg:flex-row md:flex-col flex-col gap-11 p-4 lg:p-0">
      <CategoriesNavigation categories={categoriesNavigation} />
      <HeroBanner />
    </section>
  );
};

export default Banner;
