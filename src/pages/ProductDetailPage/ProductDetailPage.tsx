import { useParams } from "react-router-dom";
import ProductDetailSection from "./ProductDetailSection";
import RelatedItemSection from "./RelatedItemSection";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { productDetailAtom } from "../../atom/store";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const productData = useAtomValue(productDetailAtom)
  const setProductData = useSetAtom(productDetailAtom)
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProductData(res));
  }, [productId]);

  if (!productData) {
    return;
  }
  return (
    <main className="max-w-[1170px] mx-auto">
      <ProductDetailSection productData={productData} />
      <RelatedItemSection />
    </main>
  );
};

export default ProductDetailPage;
