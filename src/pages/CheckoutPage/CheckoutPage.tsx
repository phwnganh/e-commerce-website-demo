import React from "react";
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
    <main className="max-w-[1170px] mx-auto mb-35">
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

      <h1 className="mt-20 font-medium text-4xl">Billing Details</h1>
      <div className="mt-12 flex justify-between">
        <CheckoutFormSection />
        <CheckoutInfoSection />
      </div>
    </main>
  );
};

export default CheckoutPage;
