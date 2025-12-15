import { useParams } from "react-router-dom";
import ProductDetailSection from "../../components/ProductDetailComponent/ProductDetailSection";
import RelatedItemSection from "../../components/ProductDetailComponent/RelatedItemSection";
import { useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import BreadCumb from "../../components/ui/BreadCumb";
import { HOMEPAGE, PRODUCTPAGE } from "../../constants/route.constants";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState<Products | null>(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProductData(res));
  }, [productId]);

  if (!productData) {
    return;
  }
  return (
    <main className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <BreadCumb
        items={[
          {
            label: "Home",
            to: HOMEPAGE,
          },
          {
            label: productData.category,
            to: `${PRODUCTPAGE}/${productData.category}`,
          },
          { label: productData.title, to: `${HOMEPAGE}/${productData.id}` },
        ]}
      />
      <ProductDetailSection productData={productData} />
      <RelatedItemSection />
    </main>
  );
};

export default ProductDetailPage;
