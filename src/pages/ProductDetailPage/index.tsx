import { useParams } from "react-router-dom";
import ProductDetailSection from "../../components/ProductDetailComponent/ProductDetailSection";
import RelatedItemSection from "../../components/ProductDetailComponent/RelatedItemSection";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product.type";
import BreadCumb from "../../components/ui/BreadCumb";
import { HOMEPAGE, PRODUCTPAGE } from "../../constants/route.constants";
import LoadingSpin from "../../components/ui/LoadingSpin";
import { getProductDetail } from "../../services/products.service";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState<Product | null>(null);

  // tao function IIEE tranh moi lan render component -> tao function xu li promise rieng
  useEffect(() => {
      if(!productId) return;
      (async () => {
          const res = await getProductDetail(productId)
          setProductData(res);
      })()
  }, [productId]);

  if (!productData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpin />
      </div>
    );
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
      <ProductDetailSection productData={productData}/>
      <RelatedItemSection productData={productData} />
    </main>
  );
};

export default ProductDetailPage;
