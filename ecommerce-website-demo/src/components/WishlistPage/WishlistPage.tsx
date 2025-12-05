import FooterSection from "../FooterSection/FooterSection";
import PostLoginHeaderSection from "../HeaderSection/PostLoginHeaderSection";
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