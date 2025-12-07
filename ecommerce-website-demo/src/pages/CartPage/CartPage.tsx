import FooterSection from '../../components/FooterSection/FooterSection';
import PostLoginHeaderSection from '../../components/HeaderSection/PostLoginHeaderSection';
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