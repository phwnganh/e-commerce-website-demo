import SecondaryCustomButton from "../../components/ui/SecondaryCustomButton";
import { useAtomValue, useSetAtom } from "jotai";
import { wishlistAtom } from "../../atom/store";
import React from "react";
import WishlistProductItem from "../../components/ProductItem/WishlistProductItem";
import { moveAllProductsToBagAtom, removeWishlistAtom } from "../../atom/actionStore";
const WishlistSection = () => {
  const wishlists = useAtomValue(wishlistAtom);

  const handleRemoveWishlist = useSetAtom(removeWishlistAtom)

  const handleMoveAllToBag = useSetAtom(moveAllProductsToBagAtom)
  return (
    <section className="mt-20 px-4 lg:px-0">
      <div className="flex flex-row justify-between items-center">
        <p className="text-base md:text-xl">Wishlist ({wishlists.length})</p>
        <SecondaryCustomButton onClick={handleMoveAllToBag}>
          Move All To Bag
        </SecondaryCustomButton>
      </div>

      <div className="mt-15 grid grid-cols-2 md:grid-cols-4 gap-7">
        {wishlists.slice(0, 4).map((product) => (
          <React.Fragment key={product.id}>
            <WishlistProductItem
              product={product}
              onRemoveWishlist={handleRemoveWishlist}
            ></WishlistProductItem>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WishlistSection;
