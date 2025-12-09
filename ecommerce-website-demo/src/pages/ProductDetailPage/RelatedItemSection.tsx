import React, { useContext, useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import { DataContext } from "../../context/GlobalDataContext";

const RelatedItemSection = () => {
  const [wishlists, setWishlists] = useState<Products[]>([]);
  const { products } = useContext(DataContext);
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlists(JSON.parse(savedWishlist));
    }
  }, []);

  const handleAddToWishlist = (product: Products) => {
    const exists = wishlists.some((item) => item.id === product.id);
    let updated;

    if (exists) {
      updated = wishlists.filter((item) => item.id !== product.id);
    } else {
      updated = [...wishlists, product];
    }
    setWishlists(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };
  return (
    <section className="my-15 lg:my-35 mx-auto max-w-[1170px] px-4 lg:px-0">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
          <p className="font-semibold text-[#DB4444] text-sm lg:text-base">
            Related Item
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-15 grid grid-cols-4 gap-7">
        {products.slice(0, 4).map((product) => (
          <React.Fragment key={product.id}>
            <HomeProductItem
              product={product}
              wishlists={wishlists}
              onAddToWishlist={handleAddToWishlist}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default RelatedItemSection;
