import AdvertisementBanner from './AdvertisementBanner';
import PreLoginNavigation from './PreLoginNavigation';

const PreLoginHeaderSection = () => {
    return (
        <header>
            <div className='bg-black'>
                <AdvertisementBanner/>
            </div>
            <div className='max-w-[1170px] mx-auto mt-10'>
                <PreLoginNavigation/>
            </div>
        </header>
    );
};

export default PreLoginHeaderSection;