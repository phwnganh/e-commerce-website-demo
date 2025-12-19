import RelatedProducts from "../../components/WishlistComponent/RelatedProducts";
import WishlistSection from "../../components/WishlistComponent/WishlistSection";
import { useAtomValue } from "jotai";
import { productsAtom } from "../../atom/store";

const WishlistPage = () => {
  const products = useAtomValue(productsAtom);

  return (
    <main className="max-w-[1170px] mx-auto">
      <WishlistSection />
      <RelatedProducts products={products} />
    </main>
  );
};

export default WishlistPage;
