import { useEffect, useState } from 'react';
import FooterSection from '../../components/FooterSection/FooterSection';
import PostLoginHeaderSection from '../../components/HeaderSection/PostLoginHeaderSection';
import Banner from './Banner';
import BestSellerProductsList from './BestSellerProductsList';
import CategoriesList from './CategoriesList';
import KeyFeatures from './KeyFeatures';
import LimitedOfferBanner from './LimitedOfferBanner';
import NewProductsAdvertisement from './NewProductsAdvertisement';
import ProductsExplorationList from './ProductsExplorationList';
import TodaysProductsList from './TodaysProductsList';
import type { Products } from '../../types/ProductTypes';
import type { Categories } from '../../types/CategoryType';

const HomePage = () => {
      const [products, setProducts] = useState<Products[]>([])
      const [categories, setCategories] = useState<Categories[]>([])
      useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

    useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);


      return (
            <div>
                  <PostLoginHeaderSection/>
                  <hr className='mt-4 border-[0.5px] border-[#0000004D]'/>
                  <Banner/>
                  <TodaysProductsList products={products}/>
                  <CategoriesList categories={categories}/>
                  <BestSellerProductsList products={products}/>
                  <LimitedOfferBanner/>
                  <ProductsExplorationList products={products}/>
                  <NewProductsAdvertisement/>
                  <KeyFeatures/>
                  <FooterSection/>
            </div>
      );
};

export default HomePage;