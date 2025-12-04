import CategoriesNavigation from './CategoriesNavigation';
import HeroBanner from './HeroBanner';

const Banner = () => {
      return (
            <section className='max-w-[1170px] mx-auto flex flex-row gap-11'>
                  <CategoriesNavigation/>
                  <HeroBanner/>
            </section>
      );
};

export default Banner;