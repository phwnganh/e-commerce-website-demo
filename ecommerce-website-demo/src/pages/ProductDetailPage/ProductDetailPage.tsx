import { useParams } from "react-router-dom";
import PostLoginHeaderSection from "../../components/HeaderSection/PostLoginHeaderSection";
import ProductDetailSection from "./ProductDetailSection";
import RelatedItemSection from "./RelatedItemSection";
import FooterSection from "../../components/FooterSection/FooterSection";
import { useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";

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
    <div>
      <PostLoginHeaderSection />
      <hr className="mt-4" />
      <ProductDetailSection productData={productData} />
      <RelatedItemSection />
      <FooterSection />
    </div>
  );
};

export default ProductDetailPage;
