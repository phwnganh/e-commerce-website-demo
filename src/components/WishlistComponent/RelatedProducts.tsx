import type { Products } from "../../types/ProductTypes";
import SecondaryCustomButton from "../../components/ui/SecondaryCustomButton";
import React from "react";
import WishlistRelatedProductItem from "../../components/ProductItem/WishlistRelatedProductItem";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";

const RelatedProducts = ({ products }: { products: Products[] }) => {
  const navigate = useNavigate();
  return (
    <section className="mt-15 mb-15 md:mb-35 px-4 lg:px-0">
      <div className="flex flex-row justify-between items-center">
        <SectionHeader title="Just For You" />
        <SecondaryCustomButton onClick={() => navigate(PRODUCTPAGE)}>
          See All
        </SecondaryCustomButton>
      </div>

      <div className="mt-15 grid grid-cols-2 md:grid-cols-4 gap-7">
        {products.slice(0, 4).map((product) => (
          <React.Fragment key={product.id}>
            <WishlistRelatedProductItem product={product} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
