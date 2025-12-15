import { useParams } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { categoryDetailAtom } from "../../atom/store";
import { useEffect } from "react";
import CategoryProductListSection from "./ProductListSection";
import BreadCumb from "../../components/ui/BreadCumb";
import {
  CATEGORYPAGE,
  HOMEPAGE,
  PRODUCTPAGE,
} from "../../constants/route.constants";

const CaategoryProductListPage = () => {
  const { slug } = useParams();
  const categoryData = useAtomValue(categoryDetailAtom);
  const setCategoryData = useSetAtom(categoryDetailAtom);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${slug}`)
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
