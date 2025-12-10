import { useParams } from "react-router-dom";
import ProductDetailSection from "./ProductDetailSection";
import RelatedItemSection from "./RelatedItemSection";
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
    <main className="max-w-[1170px] mx-auto">
      <ProductDetailSection productData={productData} />
      <RelatedItemSection />
    </main>
  );
};

export default ProductDetailPage;
