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

const HomePage = () => {
      return (
            <div>
                  <PostLoginHeaderSection/>
                  <hr className='mt-4 border-[0.5px] border-[#0000004D]'/>
                  <Banner/>
                  <TodaysProductsList/>
                  <CategoriesList/>
                  <BestSellerProductsList/>
                  <LimitedOfferBanner/>
                  <ProductsExplorationList/>
                  <NewProductsAdvertisement/>
                  <KeyFeatures/>
                  <FooterSection/>
            </div>
      );
};

export default HomePage;