import type { CartItems, Carts } from "../../types/ProductTypes";
import SecondaryCustomButton from "../../components/ui/SecondaryCustomButton";
import { useAtomValue, useSetAtom } from "jotai";
import { cartAtom, tempCartAtom, wishlistAtom } from "../../atom/store";
import React from "react";
import WishlistProductItem from "../../components/ProductItem/WishlistProductItem";
import { removeWishlistAtom } from "../../atom/actionStore";
const WishlistSection = () => {
  const wishlists = useAtomValue(wishlistAtom);
  const setWishlists = useSetAtom(wishlistAtom);
  const setCarts = useSetAtom(cartAtom);
  const setTempCarts = useSetAtom(tempCartAtom);

  const handleRemoveWishlist = useSetAtom(removeWishlistAtom)

  const handleMoveAllToBag = () => {
    const saved = localStorage.getItem("carts");
    const currentCarts: Carts = saved
      ? JSON.parse(saved)
      : { id: "1", total: 0, products: [] };

    let updatedProducts = [...currentCarts.products];
    wishlists.forEach((product) => {
      const existingItem = updatedProducts.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        const newItem: CartItems = {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          total: product.price,
          thumbnail: product.thumbnail,
        };
        updatedProducts.push(newItem);
      }
    });

    const updatedCart = {
      ...currentCarts,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
    };

    setCarts(updatedCart);
    setTempCarts(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));

    setWishlists([]);
    localStorage.setItem("wishlist", JSON.stringify([]));
  };
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
