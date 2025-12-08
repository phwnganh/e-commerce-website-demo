import { useEffect, useState } from "react";
import type { Carts } from "../../types/ProductTypes";
import DropUpIcon from "../../assets/drop-up-icon.svg";
import DropDownIcon from "../../assets/drop-down-icon.svg";
import XIcon from "../../assets/x-icon.svg";
import { NavLink } from "react-router-dom";
import { CART, HOMEPAGE } from "../../constants/route.constants";
import CustomButton from "../../components/ui/CustomButton";
const CartSection = () => {
  const [cart, setCart] = useState<Carts>();
  useEffect(() => {
    const savedCarts = localStorage.getItem("carts");
    if (savedCarts) {
      setCart(JSON.parse(savedCarts));
    }
  }, []);

  const handleIncreaseQuantity = (productId: string) => {
    if (!cart) return;
    const updatedProducts = cart.products.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1),
          }
        : item
    );

    const updatedCart = {
      ...cart,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, p) => sum + p.total, 0),
    };

    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (productId: string) => {
    if (!cart) return;
    const updatedProducts = cart.products.map((item) => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity - 1);
        return {
          ...item,
          quantity: newQuantity,
          total: newQuantity * item.price,
        };
      }
      return item;
    });

    const updatedCart = {
      ...cart,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, p) => sum + p.total, 0),
    };

    setCart(updatedCart);
  };

  const handleUpdateCart = () => {
    if (!cart) return;
    localStorage.setItem("carts", JSON.stringify(cart));
  };

  const handleRemoveItemFromCart = (productId: string) => {
    if (!cart) return;
    const updatedProduct = cart.products.filter(
      (item) => item.id !== productId
    );
    const updatedCart = {
      ...cart,
      products: updatedProduct,
      total: updatedProduct.reduce((sum, p) => sum + p.total, 0),
    };
    setCart(updatedCart);
  };

  return (
    <section className="max-w-[1170px] mx-auto mt-20 mb-11 md:mb-35 px-4 lg:px-0">
      <div className="flex flex-row gap-3 items-center">
        <NavLink to={HOMEPAGE} className="opacity-50 text-sm">Home</NavLink>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink to={CART} className={({isActive}) => `${isActive ? "text-sm" : "opacity-50 text-sm"}`}>Cart</NavLink>
      </div>

      <div className="mt-20">
        <div className="flex flex-col gap-10">
          <div
            className="grid grid-cols-4 py-3 md:py-6 rounded-sm shadow-[0px_1px_13px_0px_#0000000D]"
          >
            <div className="text-sm md:text-base">Products</div>
            <div className="text-sm md:text-base">Price</div>
            <div className="text-sm md:text-base">Quantity</div>
            <div className="text-sm md:text-base">Subtotal</div>
          </div>

          <div className="flex flex-col gap-10">
            {cart?.products.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 py-3 md:py-6 items-center rounded-sm shadow-[0px_1px_13px_0px_#0000000D]"
              >
                <div className="flex flex-row items-center gap-2 md:gap-5">
                  <div className="w-13.5 h-13.5 flex justify-center relative group">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover"/>
                    <div className="hidden group-hover:block">
                      <button
                        onClick={() => handleRemoveItemFromCart(item.id)}
                        className="absolute top-0 -left-1.75 w-4.5 h-4.5 rounded-full bg-[#DB4444] flex justify-center items-center"
                      >
                        <img src={XIcon} alt="x-icon" />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm md:text-base">{item.title}</p>
                </div>
                <p className="text-sm md:text-base">${item.price}</p>
                <div className="border-[1.5px] border-[#00000066] w-18 rounded-sm">
                  <div className="flex gap-4 items-center justify-center py-1.5 px-3">
                    <p className="text-sm md:text-base">{item.quantity}</p>
                    <div className="flex flex-col">
                      <button
                        className="w-4 h-4 flex justify-center"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <img src={DropUpIcon} alt="drop-up-icon" />
                      </button>
                      <button
                        className="w-4 h-4 flex justify-center"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <img src={DropDownIcon} alt="drop-down-icon" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-sm md:text-base">${item.total}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <button className="flex justify-center items-center rounded-sm border py-3 px-10 md:py-4 md:px-12 font-medium border-[#00000080] text-sm md:text-base">
            Return To Shop
          </button>
          <button
            className="flex justify-center items-center rounded-sm border py-3 px-10 text-sm md:text-base md:py-4 md:px-12 font-medium border-[#00000080] hover:bg-gray-200"
            onClick={handleUpdateCart}
          >
            Update Cart
          </button>
        </div>

        <div className="mt-11 md:mt-20 flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
          <div className="flex flex-row gap-4">
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Coupon Code"
              className="border rounded-sm text-sm md:text-base py-2 md:py-4 pl-6"
            />
            <CustomButton bgColor="#DB4444">Apply Coupon</CustomButton>
          </div>
          <div className="border-[1.5px] rounded-sm w-[470px] py-5 md:py-8 px-6">
            <div className="flex flex-col">
              <p className="font-medium text-base md:text-xl">Cart Total</p>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex justify-between">
                  <p className="text-sm md:text-base">Subtotal:</p>
                  <p className="text-sm md:text-base">${cart?.total?.toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p className="text-sm md:text-base">Shipping:</p>
                  <p className="text-sm md:text-base">Free</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p className="text-sm md:text-base">Total:</p>
                  <p className="text-sm md:text-base">${cart?.total?.toFixed(2)}</p>
                </div>

                <div className="flex justify-center">
                  <CustomButton bgColor="#DB4444">Procees to checkout</CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
