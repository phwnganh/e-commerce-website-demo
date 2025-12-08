import FooterSection from '../../components/FooterSection/FooterSection';
import PostLoginHeaderSection from '../../components/HeaderSection/PostLoginHeaderSection';
import CartSection from './CartSection';

const CartPage = () => {
      return (
            <>
                  <PostLoginHeaderSection/>
                  <hr className='mt-4 border-[0.5px] border-[#0000004D]'/>
                  <CartSection/>
                  <FooterSection/>
            </>
      );
};

export default CartPage;