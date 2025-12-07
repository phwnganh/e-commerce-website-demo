import FooterSection from "../../components/FooterSection/FooterSection";
import PostLoginHeaderSection from "../../components/HeaderSection/PostLoginHeaderSection";
import RelatedProducts from "./RelatedProducts";
import WishlistSection from "./WishlistSection";

const WishlistPage = () => {
    return (
        <>
            <PostLoginHeaderSection/>
            <hr className="mt-4"/>
            <WishlistSection/>
            <RelatedProducts/>
            <FooterSection/>
        </>
    );
};

export default WishlistPage;