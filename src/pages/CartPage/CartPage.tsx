import BreadCumb from "../../components/ui/BreadCumb";
import { CART, HOMEPAGE } from "../../constants/route.constants";
import CartSection from "./CartSection";

const CartPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto">
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
