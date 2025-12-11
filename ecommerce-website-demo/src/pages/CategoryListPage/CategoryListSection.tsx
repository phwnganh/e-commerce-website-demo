import { useAtomValue } from "jotai";
import { categoriesAtom } from "../../atom/store";
import { NavLink } from "react-router-dom";
import { CATEGORYPAGE, HOMEPAGE } from "../../constants/route.constants";
import Cosmetics from "../../assets/cosmetics.png";

const CategoryListSection = () => {
  const categories = useAtomValue(categoriesAtom);
  return (
    <section className="mt-20 mb-35 px-4 lg:px-0">
      <div className="flex flex-row gap-3 items-center">
        <NavLink to={HOMEPAGE} className="opacity-50 text-sm">
          Home
        </NavLink>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink
          to={CATEGORYPAGE}
          className={({ isActive }) =>
            `${isActive ? "text-sm" : "text-[#00000080] text-sm"}`
          }
        >
          Categories
        </NavLink>
      </div>

      <div className="mt-15 grid grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border justify-center items-center rounded-sm border-[#0000004D] py-6 px-14 hover:bg-[#DB4444] hover:border-[#DB4444] group cursor-pointer"
          >
            <div className="flex justify-center items-center">
              <img
                src={Cosmetics}
                alt=""
                className="group-hover:invert group-hover:brightness-0 group-hover:filter"
              />
            </div>
            <p className="text-center text-sm md:text-base group-hover:text-[#FAFAFA]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryListSection;
