import React, { useEffect, useState } from "react";
import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import type { Products } from "../../types/ProductTypes";

import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import ProductExplorationItem from "../../components/ProductItem/ProductExplorationItem";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";
const ProductsExplorationList = ({ products }: { products: Products[] }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(4);
      }
    };
    handleResize();
  }, []);

  const totalGroups = Math.ceil(products.length / itemsPerPage);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);
  return (
    <section className="mt-17 p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader title="Our Products" />
          <h3 className="font-semibold text-2xl md:text-4xl">
            Explore Our Products
          </h3>
        </div>

        <div className="flex flex-row gap-2">
          <button
            className={`bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
            disabled={currentIndex === 0}
            onClick={handlePrev}
          >
            <img src={LeftArrow1} alt="left-arrow" />
          </button>
          <button
            className={`bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === totalGroups - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
            disabled={currentIndex === totalGroups - 1}
            onClick={handleNext}
          >
            <img src={RightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-15">
        {currentProducts.map((product) => (
          <React.Fragment key={product.id}>
            <ProductExplorationItem product={product} wishlists={wishlists} />
          </React.Fragment>
        ))}
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
