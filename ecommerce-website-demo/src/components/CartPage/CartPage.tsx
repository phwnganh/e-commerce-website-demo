import FooterSection from '../FooterSection/FooterSection';
import PostLoginHeaderSection from '../HeaderSection/PostLoginHeaderSection';
import CartSection from './CartSection';

const CartPage = () => {
      return (
            <>
                  <PostLoginHeaderSection/>
                  <hr className='mt-4'/>
                  <CartSection/>
                  <FooterSection/>
            </>
      );
};

export default CartPage;