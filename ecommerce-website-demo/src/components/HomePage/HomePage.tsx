import FooterSection from '../FooterSection/FooterSection';
import PostLoginHeaderSection from '../HeaderSection/PostLoginHeaderSection';
import Banner from './Banner';
import TodaysProductsList from './TodaysProductsList';

const HomePage = () => {
      return (
            <div>
                  <PostLoginHeaderSection/>
                  <hr />
                  <Banner/>
                  <TodaysProductsList/>
                  <FooterSection/>
            </div>
      );
};

export default HomePage;