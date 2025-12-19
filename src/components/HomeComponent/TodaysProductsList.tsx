import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/icon-arrow-right.svg";
import type { Products } from "../../types/ProductTypes";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { useAtomValue } from "jotai";
import { wishlistAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import Countdown from "../../components/ui/TodayProductsCountdown";
import SectionHeader from "../../components/ui/SectionHeader";
import { useEffect, useState } from "react";
const TodaysProductsList = ({ products }: { products: Products[] }) => {
  const wishlists = useAtomValue(wishlistAtom);
  const navigate = useNavigate();
  // const itemsPerPage = 4;
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
 // lí do sử dụng handleresize là để lắng nghe sự thay đổi viewport khi người dùng resize hoặc chuyển sang mobile. khi viewpoint thay đổi, cập nhật lại state itemsperpage để số lượng item hiển thị trên mỗi trang luôn phù hợp với kích thước màn hình, đảm bảo pagination và layout responsive đúng theo design
  // thay vì chọn fix cứng itemsperpage -> dùng handleresize - linh hoạt giữa viewpoint desktop và mobile
  // chọn cách fix cứng itemsperpage -> dẫn đến pagination không được cập nhật khi viewport thay đổi
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(4);
        setCurrentIndex(0);
      } else {
        setItemsPerPage(2);
        setCurrentIndex(0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    <section className="mt-15 md:mt-35 p-4 lg:p-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 sm:gap-0">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-21">
          <div className="flex flex-col gap-4 md:gap-6">
            <SectionHeader title="Today's" />
            <h3 className="font-semibold text-2xl md:text-4xl">Flash Sales</h3>
          </div>

          <Countdown />
        </div>

        <div className="flex flex-row gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
          >
            <img src={LeftArrow1} alt="left-arrow" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === totalGroups - 1}
            className={`bg-secondary-2 rounded-full w-12 h-12 flex justify-center items-center ${
              currentIndex === totalGroups - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200 cursor-pointer"
            }`}
          >
            <img src={RightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="overflow-x-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {currentProducts.map((product) => (
              <div className="" key={product.id}>
                <HomeProductItem product={product} wishlists={wishlists} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-15 flex justify-center">
        <PrimaryCustomButton onClick={() => navigate(PRODUCTPAGE)}>
          View All Products
        </PrimaryCustomButton>
      </div>
      <hr className="mt-15 border-t border-t-black-opacity-30" />{" "}
    </section>
  );
};

export default TodaysProductsList;
