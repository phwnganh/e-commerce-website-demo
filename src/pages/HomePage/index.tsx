import Banner from "../../components/HomeComponent/Banner";
import TodaysProductsList from "../../components/HomeComponent/TodaysProductsList";
import CategoriesList from "../../components/HomeComponent/CategoriesList";
import BestSellerProductsList from "../../components/HomeComponent/BestSellerProductsList";
import LimitedOfferBanner from "../../components/HomeComponent/LimitedOfferBanner";
import ProductsExplorationList from "../../components/HomeComponent/ProductsExplorationList";
import NewProductsAdvertisement from "../../components/HomeComponent/NewProductsAdvertisement";
import KeyFeatures from "../../components/HomeComponent/KeyFeatures";
import { useAtomValue } from "jotai";
import { categoriesAtom, productsAtom } from "../../atom/store";
import { Carousel } from "../../context/CarouselContext";

const HomePage = () => {
  const products = useAtomValue(productsAtom);
  const categories = useAtomValue(categoriesAtom);
  return (
    <>
      <Banner />
      <Carousel orientation="horizontal">
        <TodaysProductsList products={products} />
      </Carousel>
      <Carousel orientation="horizontal">
        <CategoriesList categories={categories} />
      </Carousel>
      <BestSellerProductsList products={products} />
      <LimitedOfferBanner />
      <Carousel orientation="horizontal">
        <ProductsExplorationList products={products} />
      </Carousel>
      <NewProductsAdvertisement />
      <KeyFeatures />
    </>
  );
};

export default HomePage;
