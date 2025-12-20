import Cosmetics from "../../assets/cosmetics.png";
import type { Categories } from "../../types/category.type";
import { useNavigate } from "react-router-dom";
import { PRODUCTPAGE } from "../../constants/route.constants";
import SectionHeader from "../../components/ui/SectionHeader";
import { useEffect, useState } from "react";
import ArrowButtonsComponent from "../ui/ArrowButtonsComponent";
const CategoriesList = ({ categories }: { categories: Categories[] }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  // lí do sử dụng handleresize là để lắng nghe sự thay đổi viewport khi người dùng resize hoặc chuyển sang mobile. khi viewpoint thay đổi, cập nhật lại state itemsperpage để số lượng item hiển thị trên mỗi trang luôn phù hợp với kích thước màn hình, đảm bảo pagination và layout responsive đúng theo design
  // thay vì chọn fix cứng itemsperpage -> dùng handleresize - linh hoạt giữa viewpoint desktop và mobile
  // chọn cách fix cứng itemsperpage -> dẫn đến pagination không được cập nhật khi viewport thay đổi
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
        setCurrentIndex(0);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4);
        setCurrentIndex(0);
      } else if (window.innerWidth >= 576) {
        setItemsPerPage(2);
        setCurrentIndex(0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalGroups = Math.ceil(categories.length / itemsPerPage);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCategories = categories.slice(startIndex, endIndex);
  return (
    <section className="mt-10 md:mt-20 p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <SectionHeader title="Categories" />
          <h3 className="font-semibold text-2xl md:text-4xl">
            Browse By Category
          </h3>
        </div>

        <ArrowButtonsComponent
          handlePrev={handlePrev}
          currentIndex={currentIndex}
          totalGroups={totalGroups}
          handleNext={handleNext}
        />
      </div>
      <div className="mt-15 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {currentCategories.map((category, index) => (
          <button
            onClick={() => navigate(`${PRODUCTPAGE}/${category.slug}`)}
            className="flex flex-col gap-4 border justify-center items-center rounded-sm border-black-opacity-30 py-6 px-14 hover:bg-button-2 hover:border-button-2 group cursor-pointer"
            key={index}
          >
            <div className="flex justify-center items-center aspect-square">
              <img
                src={Cosmetics}
                alt=""
                className="w-full h-full object-cover group-hover:invert group-hover:brightness-0 group-hover:filter"
              />
            </div>
            <p className="text-center text-sm md:text-base group-hover:text-text-1">
              {category.name}
            </p>
          </button>
        ))}
      </div>
      <hr className="mt-17.5 border-t border-t-black-opacity-30" />{" "}
    </section>
  );
};

export default CategoriesList;
