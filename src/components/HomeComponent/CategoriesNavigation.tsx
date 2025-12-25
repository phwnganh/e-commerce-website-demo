import { NavLink, useNavigate } from "react-router-dom";
import { CATEGORYPAGE, PRODUCTPAGE } from "../../constants/route.constants";
import SecondaryCustomButton from "../../components/ui/SecondaryCustomButton";

const CategoriesNavigation = ({ categories }: { categories: string[] }) => {
  const navigate = useNavigate();
  const displayedCategories = categories.slice(0, 10);
  return (
    <aside className="hidden md:flex md:flex-row gap-4 flex-col">
      <div className="mt-10 flex flex-col gap-4 lg:items-start items-center w-full lg:w-[217px]">
        {displayedCategories.map((category, index) => (
          <NavLink to={`${PRODUCTPAGE}/${category}`} key={index}>
            {category}
          </NavLink>
        ))}
        <SecondaryCustomButton onClick={() => navigate(CATEGORYPAGE)}>
          See More
        </SecondaryCustomButton>
      </div>
      <div className="hidden lg:block border-l border-l-black-opacity-30 rotate-180"></div>
    </aside>
  );
};

export default CategoriesNavigation;
