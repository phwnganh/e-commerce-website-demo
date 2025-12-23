import React from "react";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import { useAtomValue } from "jotai";
import { productsByCategoryAtom, wishlistAtom } from "../../atom/store";
import SectionHeader from "../../components/ui/SectionHeader";
import type { Product } from "../../types/product.type";

const RelatedItemSection = ({ productData }: { productData: Product }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const categoryData = useAtomValue(
    productsByCategoryAtom(productData.category)
  );

  return (
    <section className="my-15 lg:my-35">
      <div className="flex flex-row justify-between items-center">
        <SectionHeader title="Related Item" />
      </div>

      <div className="mt-10 lg:mt-15 grid grid-cols-2 md:grid-cols-4 gap-7">
        {categoryData?.products.slice(0, 4).map((product) => (
          <React.Fragment key={product.id}>
            <HomeProductItem product={product} wishlists={wishlists} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default RelatedItemSection;
