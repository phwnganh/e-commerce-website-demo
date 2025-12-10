import { useContext } from "react";
import Banner from "./Banner";
import BestSellerProductsList from "./BestSellerProductsList";
import CategoriesList from "./CategoriesList";
import KeyFeatures from "./KeyFeatures";
import LimitedOfferBanner from "./LimitedOfferBanner";
import NewProductsAdvertisement from "./NewProductsAdvertisement";
import ProductsExplorationList from "./ProductsExplorationList";
import TodaysProductsList from "./TodaysProductsList";
import { DataContext } from "../../context/GlobalDataContext";

const HomePage = () => {
  const { products, categories } = useContext(DataContext);

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
