import FooterSection from '../FooterSection/FooterSection';
import PostLoginHeaderSection from '../HeaderSection/PostLoginHeaderSection';
import Banner from './Banner';
import CategoriesList from './CategoriesList';
import TodaysProductsList from './TodaysProductsList';

const HomePage = () => {
      return (
            <div>
                  <PostLoginHeaderSection/>
                  <hr />
                  <Banner/>
                  <TodaysProductsList/>
                  <CategoriesList/>
                  <FooterSection/>
            </div>
      );
};

export default HomePage;