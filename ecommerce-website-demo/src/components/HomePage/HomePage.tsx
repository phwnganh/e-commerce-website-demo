import FooterSection from '../FooterSection/FooterSection';
import PostLoginHeaderSection from '../HeaderSection/PostLoginHeaderSection';
import Banner from './Banner';

const HomePage = () => {
      return (
            <div>
                  <PostLoginHeaderSection/>
                  <hr />
                  <Banner/>
                  <FooterSection/>
            </div>
      );
};

export default HomePage;