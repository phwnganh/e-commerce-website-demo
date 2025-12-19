import React, { useEffect, useState } from "react";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import SectionHeader from "../../components/ui/SectionHeader";
import type { CategoryDetail } from "../../types/category.type";
import type { Products } from "../../types/product.type";
import { API_CATEGORY_PRODUCTS_URL } from "../../constants/api.constants";

const RelatedItemSection = ({ productData }: { productData: Products }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const [categoryData, setCategoryData] = useState<CategoryDetail | null>(null);

  useEffect(() => {
    fetch(`${API_CATEGORY_PRODUCTS_URL}${productData.category}`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryData(res);
      });
  }, []);
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
