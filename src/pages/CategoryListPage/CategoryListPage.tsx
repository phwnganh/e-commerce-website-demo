import BreadCumb from "../../components/ui/BreadCumb";
import { CATEGORYPAGE, HOMEPAGE } from "../../constants/route.constants";
import CategoryListSection from "../../components/CategoryListComponent/CategoryListSection";

const CategoryListPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto">
      <BreadCumb
        items={[
          { label: "Home", to: HOMEPAGE },
          { label: "Categories", to: CATEGORYPAGE },
        ]}
      />
      <CategoryListSection />
    </main>
  );
};

export default CategoryListPage;
