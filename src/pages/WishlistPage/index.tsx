import RelatedProducts from "../../components/WishlistComponent/RelatedProducts";
import WishlistSection from "../../components/WishlistComponent/WishlistSection";
import { useAtomValue, useSetAtom } from "jotai";
import { productsAtom } from "../../atom/store";
import { useEffect } from "react";

const WishlistPage = () => {
  const products = useAtomValue(productsAtom);
  const setProducts = useSetAtom(productsAtom);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);
  return (
    <main className="max-w-[1170px] mx-auto">
      <WishlistSection />
      <RelatedProducts products={products} />
    </main>
  );
};

export default WishlistPage;
