import { useParams } from "react-router-dom";
import CategoryProductListSection from "../../components/ProductListComponent/CategoryProductListSection";
import BreadCumb from "../../components/ui/BreadCumb";
import {
  CATEGORYPAGE,
  HOMEPAGE,
  PRODUCTPAGE,
} from "../../constants/route.constants";
import { useAtomValue } from "jotai";
import { productsByCategoryAtom } from "../../atom/store";

const CaategoryProductListPage = () => {
  const { slug } = useParams();
  if (!slug) return null;
  const categoryData = useAtomValue(productsByCategoryAtom(slug));
  return (
    <main className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <BreadCumb
        items={[
          {
            label: "Home",
            to: HOMEPAGE,
          },
          { label: "Categories", to: CATEGORYPAGE },
          {
            label: slug,
            to: `${PRODUCTPAGE}/${slug}`,
          },
        ]}
      />
      <CategoryProductListSection categoryData={categoryData} />
    </main>
  );
};

export default CaategoryProductListPage;
