import RelatedProducts from "./RelatedProducts";
import WishlistSection from "./WishlistSection";

const WishlistPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto">
      <WishlistSection />
      <RelatedProducts />
    </main>
  );
};

export default WishlistPage;
