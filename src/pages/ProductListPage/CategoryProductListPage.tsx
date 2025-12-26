import { useParams } from "react-router-dom";
import CategoryProductListSection from "../../components/ProductListComponent/CategoryProductListSection";
import BreadCumb from "../../components/ui/BreadCumb";
import {
  CATEGORYPAGE,
  HOMEPAGE,
  PRODUCTPAGE,
} from "../../constants/route.constants";
import {useEffect, useState} from "react";
import {fetchProductsByCategory} from "../../services/products.service.ts";
import type {CategoryDetail} from "../../types/category.type.ts";
import LoadingSpin from "../../components/ui/LoadingSpin.tsx";

const CategoryProductListPage = () => {
  const { slug } = useParams();
  const [productCategoryData, setProductCategoryData] = useState<CategoryDetail | null>(null)

    useEffect(() => {
        if(!slug) return;
        (async () => {
            const res = await fetchProductsByCategory(slug)
            setProductCategoryData(res)
        })()
    }, [slug]);

  if(!productCategoryData || !slug){
      return (
          <div className="min-h-[60vh] flex items-center justify-center">
              <LoadingSpin />
          </div>
      )
  }
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
      <CategoryProductListSection categoryData={productCategoryData} />
    </main>
  );
};

export default CategoryProductListPage;
