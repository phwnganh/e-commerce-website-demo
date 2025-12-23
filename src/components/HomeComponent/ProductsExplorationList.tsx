import React, { useMemo } from "react";
import type { ProductsResponse } from "../../types/product.type";

import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import ProductExplorationItem from "../../components/ProductItem/ProductExplorationItem";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";
import CarouselControls from "../CarouselComponent/CarouselControls";
import CarouselViewport from "../CarouselComponent/CarouselViewport";
import CarouselTrack from "../CarouselComponent/CarouselTrack";
import CarouselItem from "../CarouselComponent/CarouselItem";
const ProductsExplorationList = ({
  products,
}: {
  products: ProductsResponse;
}) => {
  const wishlists = useAtomValue(wishlistAtom);
  const navigate = useNavigate();

  // mỗi cột có 2 item (tức là 2 hàng n cột)
  const columns = useMemo(() => {
    const result = [];
    for (let i = 0; i < products.products.length; i += 2) {
      result.push(products.products.slice(i, i + 2));
    }
    return result;
  }, [products.products]);
  return (
    <section className="mt-17 px-4 lg:px-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader title="Our Products" />
          <h3 className="font-semibold text-2xl md:text-4xl">
            Explore Our Products
          </h3>
        </div>
        <CarouselControls />
      </div>
      <div className="mt-15">
        <CarouselViewport>
          <CarouselTrack>
            {columns.map((col, index) => (
              <CarouselItem
                key={index}
                className="basis-[calc(50%-14px)] md:basis-[calc(25%-21px)]"
              >
                {col.map((product) => (
                  <React.Fragment key={product.id}>
                    <ProductExplorationItem
                      product={product}
                      wishlists={wishlists}
                    />
                  </React.Fragment>
                ))}
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselViewport>
      </div>
      <div className="mt-15 flex justify-center">
        <PrimaryCustomButton onClick={() => navigate(PRODUCTPAGE)}>
          View All Products
        </PrimaryCustomButton>
      </div>
    </section>
  );
};

export default ProductsExplorationList;
