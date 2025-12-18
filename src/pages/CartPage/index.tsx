import BreadCumb from "../../components/ui/BreadCumb";
import { CART, HOMEPAGE } from "../../constants/route.constants";
import CartSection from "../../components/CartComponent/CartSection";

const CartPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <BreadCumb
        items={[
          { label: "Home", to: HOMEPAGE },
          { label: "Cart", to: CART },
        ]}
      />
      <CartSection />
    </main>
  );
};

export default CartPage;
