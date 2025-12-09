import { useEffect, useState } from "react";
import type { CartItems, Carts, Products } from "../../types/ProductTypes";
import EyeIcon from "../../assets/Eye-icon.svg";
import StarRating from "../../components/ui/StarRating";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
import SecondaryCustomButton from "../../components/ui/SecondaryCustomButton";

const RelatedProducts = () => {
  const [todaysProducts, setTodaysProducts] = useState<Products[]>([]);
  const [cartsSaved, setCartsSaved] = useState<Carts>({
    id: "1",
    total: 0,
    discountTotal: 0,
    products: [],
  });

  useEffect(() => {
    const savedCarts = localStorage.getItem("carts");
    if (savedCarts) {
      setCartsSaved(JSON.parse(savedCarts));
    }
  }, []);

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
    setCartsSaved(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTodaysProducts(res.products));
  }, []);

  return (
    <section className="max-w-[1170px] mx-auto mt-15 mb-15 md:mb-35 px-4 lg:px-0">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
          <p className="text-base md:text-xl font-semibold">Just For You</p>
        </div>
        <SecondaryCustomButton>
          See All
        </SecondaryCustomButton>
      </div>

      <div className="mt-15 grid grid-cols-2 md:grid-cols-4 gap-7">
        {todaysProducts.slice(0, 4).map((product) => (
          <div className="flex flex-col gap-4 w-full" key={product.id}>
            <div className="bg-[#F5F5F5] rounded-sm w-full relative group">
              <div className="bg-[#DB4444] w-[55px] absolute left-3 top-3 text-center text-xs text-[#FAFAFA] rounded-sm py-1 px-3">
                {Math.round(product.discountPercentage)}%
              </div>
              <img
                src={product.images[0]}
                alt="product-imgs"
                className="w-full h-full"
              />
              <div className="flex flex-col gap-1 md:gap-2 absolute top-1 md:top-3 right-2 md:right-3">
                <button
                  onClick={() => navigate(`${HOMEPAGE}/${product.id}`)}
                  className="bg-white flex items-center justify-center rounded-full w-6 h-6 md:w-[34px] md:h-[34px] hover:bg-gray-200 cursor-pointer"
                >
                  <img src={EyeIcon} alt="eye-icon"/>
                </button>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute w-full bottom-0 bg-black text-white font-medium text-center py-2 rounded-bl-sm rounded-br-sm hidden group-hover:block cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs md:text-base line-clamp-1">{product.title}</p>
              <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
                <p className="font-medium text-[#DB4444] text-xs md:text-base">
                  ${(product.price * 0.5).toFixed(2)}
                </p>
                <p className="font-medium opacity-50 line-through text-xs md:text-base">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <StarRating rating={product.rating}></StarRating>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
