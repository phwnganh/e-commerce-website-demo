import type { CartItems, Carts, Products } from "../../types/ProductTypes";
import TrashIcon from "../../assets/icon-delete.svg";
import SecondaryCustomButton from "../../components/ui/SecondaryCustomButton";
import { useAtomValue, useSetAtom } from "jotai";
import { cartAtom, tempCartAtom, wishlistAtom } from "../../atom/store";
const WishlistSection = () => {
  const wishlists = useAtomValue(wishlistAtom);
  const setWishlists = useSetAtom(wishlistAtom);
  const setCarts = useSetAtom(cartAtom);
  const setTempCarts = useSetAtom(tempCartAtom);

  const handleAddToCart = (product: Products) => {
    const saved = localStorage.getItem("carts");
    let currentCarts: Carts = saved
      ? JSON.parse(saved)
      : { id: "1", total: 0, products: [] };

    const existingItem = currentCarts.products.find(
      (item) => item.id === product.id
    );

    let updatedProducts;
    if (existingItem) {
      updatedProducts = currentCarts.products.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      const newItem: CartItems = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        total: product.price,
        thumbnail: product.thumbnail,
      };
      updatedProducts = [...currentCarts.products, newItem];
    }

    const updatedCart = {
      ...currentCarts,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
    };
    setCarts(updatedCart);
    setTempCarts(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  const handleRemoveWishlist = (product: Products) => {
    const updated = wishlists.filter((item) => item.id !== product.id);
    setWishlists(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

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
          <div className="flex flex-col gap-4 w-full" key={product.id}>
            <div className="bg-secondary-2 rounded-sm w-full relative">
              <div className="relative group/image">
                <div className="bg-button-2 w-[55px] absolute left-3 top-3 text-center text-xs text-text-1 rounded-sm py-1 px-3">
                  {Math.round(product.discountPercentage)}%
                </div>
                <img
                  src={product.images[0]}
                  alt="product-imgs"
                  className="w-full h-full"
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute w-full bottom-0 bg-black text-white font-medium text-center py-2 rounded-bl-sm rounded-br-sm hidden group-hover/image:block cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex flex-col gap-1 md:gap-2 absolute top-1 md:top-3 right-2 md:right-3">
                <button
                  onClick={() => handleRemoveWishlist(product)}
                  className="bg-white flex items-center justify-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px] hover:bg-gray-200 cursor-pointer"
                >
                  <img src={TrashIcon} alt="trash-icon" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs md:text-base line-clamp-1">
                {product.title}
              </p>
              <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
                <p className="font-medium text-button-2 text-xs md:text-base">
                  ${(product.price * 0.5).toFixed(2)}
                </p>
                <p className="font-medium opacity-50 line-through text-xs md:text-base">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WishlistSection;
