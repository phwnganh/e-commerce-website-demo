import React, { useEffect, useState } from "react";
import type { Products } from "../../types/ProductTypes";
import HomeProductItem from "../../components/ProductItem/HomeProductItem";
import CustomButton from "../../components/ui/CustomButton";
const BestSellerProductsList = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState<Products[]>([]);
  const [wishlists, setWishlists] = useState<Products[]>([]);
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlists(JSON.parse(savedWishlist));
    }
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setBestSellerProducts(res.products));
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
    <section className="mt-17 max-w-[1170px] mx-auto p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold text-sm md:text-base">This Month</p>
          </div>
          <h3 className="font-semibold text-2xl md:text-4xl">Best Selling Products</h3>
        </div>
        <CustomButton bgColor="#DB4444">View All</CustomButton>
      </div>

      <div className="grid grid-cols-4 gap-7 mt-15">
        {bestSellerProducts.slice(0, 4).map((product) => (
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

export default BestSellerProductsList;
