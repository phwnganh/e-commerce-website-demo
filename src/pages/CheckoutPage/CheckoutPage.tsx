import BreadCumb from "../../components/ui/BreadCumb";
import {
  ACCOUNT,
  CART,
  CHECKOUT,
  HOMEPAGE,
  PRODUCTPAGE,
} from "../../constants/route.constants";
import CheckoutFormSection from "../../components/CheckoutComponent/CheckoutFormSection";
import CheckoutInfoSection from "../../components/CheckoutComponent/CheckoutInfoSection";

const CheckoutPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto mb-15 md:mb-35 px-4 lg:px-0">
      <BreadCumb
        items={[
          {
            label: "Home",
            to: HOMEPAGE,
          },
          {
            label: "My Account",
            to: ACCOUNT,
          },
          {
            label: "Product",
            to: PRODUCTPAGE,
          },
          {
            label: "View Cart",
            to: CART,
          },
          {
            label: "CheckOut",
            to: CHECKOUT,
          },
        ]}
      />

      <h1 className="mt-11 md:mt-20 font-medium text-2xl md:text-4xl">
        Billing Details
      </h1>
      <div className="mt-5 md:mt-12 flex flex-col md:flex-row justify-between">
        <CheckoutFormSection />
        <CheckoutInfoSection />
      </div>
    </main>
  );
};

export default CheckoutPage;
