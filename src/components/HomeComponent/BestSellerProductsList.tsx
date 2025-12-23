import React from "react";
import type { ProductsResponse } from "../../types/product.type";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";
const BestSellerProductsList = ({ products }: { products: ProductsResponse }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const navigate = useNavigate();
  return (
    <section className="mt-10 md:mt-17 px-4 lg:px-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader title="This Month"/>
          <h3 className="font-semibold text-2xl md:text-4xl">
            Best Selling Products
          </h3>
        </div>
        <PrimaryCustomButton
          onClick={() => navigate(PRODUCTPAGE)}
        >
          View All
        </PrimaryCustomButton>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-15">
        {products.products.slice(0, 4).map((product) => (
          <React.Fragment key={product.id}>
            <HomeProductItem
              product={product}
              wishlists={wishlists}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BestSellerProductsList;
