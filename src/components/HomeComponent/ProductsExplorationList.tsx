import React, { useEffect, useState } from "react";
import type { ProductsResponse } from "../../types/product.type";

import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import ProductExplorationItem from "../../components/ProductItem/ProductExplorationItem";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";
import ArrowButtonsComponent from "../ui/ArrowButtonsComponent";
const ProductsExplorationList = ({
  products,
}: {
  products: ProductsResponse;
}) => {
  const wishlists = useAtomValue(wishlistAtom);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // lí do sử dụng handleresize là để lắng nghe sự thay đổi viewport khi người dùng resize hoặc chuyển sang mobile. khi viewpoint thay đổi, cập nhật lại state itemsperpage để số lượng item hiển thị trên mỗi trang luôn phù hợp với kích thước màn hình, đảm bảo pagination và layout responsive đúng theo design
  // thay vì chọn fix cứng itemsperpage -> dùng handleresize - linh hoạt giữa viewpoint desktop và mobile
  // chọn cách fix cứng itemsperpage -> dẫn đến pagination không được cập nhật khi viewport thay đổi
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(8);
        setCurrentIndex(0);
      } else {
        setItemsPerPage(4);
        setCurrentIndex(0);
      }
    };
    handleResize();
  }, []);

  const totalGroups = Math.ceil(products.products.length / itemsPerPage);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = products.products.slice(startIndex, endIndex);
  return (
    <section className="mt-17 p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader title="Our Products" />
          <h3 className="font-semibold text-2xl md:text-4xl">
            Explore Our Products
          </h3>
        </div>

        <ArrowButtonsComponent
          handlePrev={handlePrev}
          currentIndex={currentIndex}
          totalGroups={totalGroups}
          handleNext={handleNext}
        />
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
