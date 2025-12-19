import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryProductListSection from "../../components/ProductListComponent/CategoryProductListSection";
import BreadCumb from "../../components/ui/BreadCumb";
import {
  CATEGORYPAGE,
  HOMEPAGE,
  PRODUCTPAGE,
} from "../../constants/route.constants";
import type { CategoryDetail } from "../../types/category.type";
import { API_CATEGORY_PRODUCTS_URL } from "../../constants/api.constants";

const CaategoryProductListPage = () => {
  const { slug } = useParams();
  const [categoryData, setCategoryData] = useState<CategoryDetail | null>(null);

  useEffect(() => {
    fetch(`${API_CATEGORY_PRODUCTS_URL}${slug}`)
      .then((res) => res.json())
      .then((res) => setCategoryData(res));
  }, [slug]);
  if (!slug) return;
  if (!categoryData) return;
  return (
    <main className="max-w-[1170px] mx-auto">
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
