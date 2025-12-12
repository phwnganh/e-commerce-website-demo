import Banner from "./Banner";
import BestSellerProductsList from "./BestSellerProductsList";
import CategoriesList from "./CategoriesList";
import KeyFeatures from "./KeyFeatures";
import LimitedOfferBanner from "./LimitedOfferBanner";
import NewProductsAdvertisement from "./NewProductsAdvertisement";
import ProductsExplorationList from "./ProductsExplorationList";
import TodaysProductsList from "./TodaysProductsList";
import { useAtomValue } from "jotai";
import { categoriesAtom, productsAtom } from "../../atom/store";

const HomePage = () => {
  const products = useAtomValue(productsAtom)
  const categories = useAtomValue(categoriesAtom)

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
