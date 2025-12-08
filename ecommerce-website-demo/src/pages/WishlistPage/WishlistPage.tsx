import FooterSection from "../../components/FooterSection/FooterSection";
import PostLoginHeaderSection from "../../components/HeaderSection/PostLoginHeaderSection";
import RelatedProducts from "./RelatedProducts";
import WishlistSection from "./WishlistSection";

const WishlistPage = () => {
  return (
    <>
      <PostLoginHeaderSection />
      <hr className="mt-4 border-[0.5px] border-[#0000004D]" />{" "}
      <WishlistSection />
      <RelatedProducts />
      <FooterSection />
    </>
  );
};

export default WishlistPage;
