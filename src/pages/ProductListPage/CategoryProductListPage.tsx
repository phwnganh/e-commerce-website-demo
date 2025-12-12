import { useParams } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { categoryDetailAtom } from "../../atom/store";
import { useEffect } from "react";
import CategoryProductListSection from "./ProductListSection";

const CaategoryProductListPage = () => {
  const { slug } = useParams();
  const categoryData = useAtomValue(categoryDetailAtom);
  const setCategoryData = useSetAtom(categoryDetailAtom);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => res.json())
      .then((res) => setCategoryData(res));
  }, [slug]);
  if (!categoryData) return;
  return (
    <main className="max-w-[1170px] mx-auto">
      <CategoryProductListSection slug={slug} categoryData={categoryData} />
    </main>
  );
};

export default CaategoryProductListPage;
