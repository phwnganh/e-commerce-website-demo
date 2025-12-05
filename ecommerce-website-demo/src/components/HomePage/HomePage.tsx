import FooterSection from '../FooterSection/FooterSection';
import PostLoginHeaderSection from '../HeaderSection/PostLoginHeaderSection';
import Banner from './Banner';
import BestSellerProductsList from './BestSellerProductsList';
import CategoriesList from './CategoriesList';
import ProductsExplorationList from './ProductsExplorationList';
import TodaysProductsList from './TodaysProductsList';

const HomePage = () => {
      return (
            <div>
                  <PostLoginHeaderSection/>
                  <hr />
                  <Banner/>
                  <TodaysProductsList/>
                  <CategoriesList/>
                  <BestSellerProductsList/>
                  <ProductsExplorationList/>
                  <FooterSection/>
            </div>
      );
};

export default HomePage;