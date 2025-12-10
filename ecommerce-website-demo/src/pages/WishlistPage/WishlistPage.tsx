import { useContext } from "react";
import RelatedProducts from "./RelatedProducts";
import WishlistSection from "./WishlistSection";
import { DataContext } from "../../context/GlobalDataContext";

const WishlistPage = () => {
  const { products } = useContext(DataContext);

  return (
    <main className="max-w-[1170px] mx-auto">
      <WishlistSection />
      <RelatedProducts products={products} />
    </main>
  );
};

export default WishlistPage;
