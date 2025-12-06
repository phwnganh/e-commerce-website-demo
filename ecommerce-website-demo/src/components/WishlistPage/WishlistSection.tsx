import { useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import TrashIcon from "../../assets/icon-delete.svg";
const WishlistSection = () => {
  const [todaysProducts, setTodaysProducts] = useState<Products[]>([]);
  const [wishlists, setWishlists] = useState<Products[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTodaysProducts(res.products));
  }, []);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlists(JSON.parse(savedWishlist));
    }
  }, []);

  const handleRemoveWishlist = (product: Products) => {
    const updated = wishlists.filter((item) => item.id !== product.id);
    setWishlists(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };
  return (
    <section className="max-w-[1170px] mx-auto mt-20">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl">Wishlist ({wishlists.length})</p>
        <button className="border-[#00000080] border rounded-sm py-4 px-12">
          Move All To Bag
        </button>
      </div>

      <div className="mt-15 grid grid-cols-4 gap-7">
        {wishlists.slice(0, 4).map((product) => (
          <div className="flex flex-col gap-4" key={product.id}>
            <div className="bg-[#F5F5F5] rounded-sm w-[270px] relative">
              <div className="bg-[#DB4444] w-[55px] absolute left-3 top-3 text-center text-xs text-[#FAFAFA] rounded-sm py-1 px-3">
                {Math.round(product.discountPercentage)}%
              </div>
              <img
                src={product.images[0]}
                alt="product-imgs"
                className="w-full"
              />
              <div className="flex flex-col gap-2 absolute top-3 right-3 ">
                <button
                  onClick={() => handleRemoveWishlist(product)}
                  className="bg-white flex items-center justify-center rounded-[50%] w-8 h-8 p-2.5"
                >
                  <img src={TrashIcon} alt="trash-icon" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">{product.title}</p>
              <div className="flex flex-row gap-3">
                <p className="font-medium text-[#DB4444]">
                  ${(product.price * 0.5).toFixed(2)}
                </p>
                <p className="font-medium opacity-50 line-through">
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
