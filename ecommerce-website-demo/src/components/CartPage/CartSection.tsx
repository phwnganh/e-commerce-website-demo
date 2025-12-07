import { useEffect, useState } from "react";
import type { CartItems } from "../../types/ProductTypes";
import DropUpIcon from "../../assets/drop-up-icon.svg";
import DropDownIcon from "../../assets/drop-down-icon.svg";
const CartSection = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts/1")
      .then((res) => res.json())
      .then((res) => setCartItems(res.products));
  }, []);
  return (
    <section className="max-w-[1170px] mx-auto mt-20 mb-35">
      <div className="flex flex-row gap-3 items-center">
        <p className="opacity-50 text-sm">Home</p>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <p className="opacity-50 text-sm">Cart</p>
      </div>

      <div className="mt-20">
        <div className="flex flex-col gap-10">
          <div
            className="grid grid-cols-4 py-6 rounded-sm shadow-[0px_1px_13px_0px_#0000000D]
"
          >
            <div>Products</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          <div className="flex flex-col gap-10">
            {cartItems.map((cart) => (
              <div
                key={cart.id}
                className="grid grid-cols-4 py-6 items-center rounded-sm shadow-[0px_1px_13px_0px_#0000000D]
"
              >
                <div className="flex flex-row items-center gap-5">
                  <img
                    src={cart.thumbnail}
                    alt={cart.title}
                    className="w-13.5 h-13.5"
                  />
                  <p className="">{cart.title}</p>
                </div>
                <p>${cart.price}</p>
                <div className="border-[1.5px] border-[#00000066] w-18 rounded-sm">
                  <div className="flex gap-4 items-center justify-center py-1.5 px-3">
                    <p>{cart.quantity}</p>
                    <div className="flex flex-col">
                      <button className="w-4 h-4 flex justify-center">
                        <img src={DropUpIcon} alt="drop-up-icon" />
                      </button>
                      <button className="w-4 h-4 flex justify-center">
                        <img src={DropDownIcon} alt="drop-down-icon" />
                      </button>
                    </div>
                  </div>
                </div>
                <p>${cart.discountedTotal}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <button className="flex justify-center items-center rounded-sm border py-4 px-12 font-medium border-[#00000080]">
            Return To Shop
          </button>
          <button className="flex justify-center items-center rounded-sm border py-4 px-12 font-medium border-[#00000080]">
            Update Cart
          </button>
        </div>

        <div className="mt-20 flex flex-row justify-between items-start">
          <div className="flex flex-row gap-4">
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Coupon Code"
              className="border rounded-sm py-4 pl-6"
            />
            <button className="bg-[#DB4444] py-4 px-12 rounded-sm text-[#FAFAFA]">
              Apply Coupon
            </button>
          </div>
          <div className="border-[1.5px] rounded-sm w-[470px] py-8 px-6">
            <div className="flex flex-col">
              <p className="font-medium text-xl">Cart Total</p>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <p>$17502</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Total:</p>
                  <p>$17502</p>
                </div>

                <div className="flex justify-center">
                  <button className="bg-[#DB4444] py-4 px-12 rounded-sm text-[#FAFAFA]">
                    Procees to checkout
                  </button>
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
