import Banner from "../../components/HomeComponent/Banner";
import BestSellerProductsList from "../../components/HomeComponent/BestSellerProductsList";
import CategoriesList from "../../components/HomeComponent/CategoriesList";
import KeyFeatures from "../../components/HomeComponent/KeyFeatures";
import LimitedOfferBanner from "../../components/HomeComponent/LimitedOfferBanner";
import NewProductsAdvertisement from "../../components/HomeComponent/NewProductsAdvertisement";
import ProductsExplorationList from "../../components/HomeComponent/ProductsExplorationList";
import TodaysProductsList from "../../components/HomeComponent/TodaysProductsList";
import { useAtomValue, useSetAtom } from "jotai";
import { categoriesAtom, productsAtom } from "../../atom/store";
import { useEffect } from "react";

const HomePage = () => {
  const products = useAtomValue(productsAtom)
  const categories = useAtomValue(categoriesAtom)
  const setProducts = useSetAtom(productsAtom)
  const setCategories = useSetAtom(categoriesAtom)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, []);
  return (
    <main className="max-w-[1170px] mx-auto">
      <Banner />
      <TodaysProductsList products={products} />
      <CategoriesList categories={categories} />
      <BestSellerProductsList products={products} />
      <LimitedOfferBanner />
      <ProductsExplorationList products={products} />
      <NewProductsAdvertisement />
      <KeyFeatures />
    </main>
  );
};

export default HomePage;
