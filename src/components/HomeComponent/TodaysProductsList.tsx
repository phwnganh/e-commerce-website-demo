import type { ProductsResponse } from "../../types/product.type";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import Countdown from "../../components/TimeCountdownComponent/TodayProductsCountdown";
import SectionHeader from "../../components/ui/SectionHeader";
import CarouselControls from "../CarouselComponent/CarouselControls";
import CarouselViewport from "../CarouselComponent/CarouselViewport";
import CarouselTrack from "../CarouselComponent/CarouselTrack";
import CarouselItem from "../CarouselComponent/CarouselItem";
const TodaysProductsList = ({ products }: { products: ProductsResponse }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const navigate = useNavigate();
  return (
    <section className="mt-15 md:mt-35 px-4 lg:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 sm:gap-0">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-21">
          <div className="flex flex-col gap-4 md:gap-6">
            <SectionHeader title="Today's" />
            <h3 className="font-semibold text-2xl md:text-4xl">Flash Sales</h3>
          </div>
          <Countdown />
        </div>
        <CarouselControls />
      </div>
      <div className="mt-10">
        <CarouselViewport>
          <CarouselTrack>
            {products.products.map((product) => (
              <CarouselItem
                className="md:basis-[calc(25%-21px)] basis-[calc(50%-14px)]"
                key={product.id}
              >
                <HomeProductItem product={product} wishlists={wishlists} />
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselViewport>
      </div>
      <div className="mt-10 md:mt-15 flex justify-center">
        <PrimaryCustomButton onClick={() => navigate(PRODUCTPAGE)}>
          View All Products
        </PrimaryCustomButton>
      </div>
      <hr className="mt-15 border-t border-t-black-opacity-30" />
    </section>
  );
};

export default TodaysProductsList;
