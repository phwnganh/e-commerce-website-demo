import DropUpIcon from "../../assets/drop-up-icon.svg";
import DropDownIcon from "../../assets/drop-down-icon.svg";
import XIcon from "../../assets/x-icon.svg";
import { useNavigate } from "react-router-dom";
import { CHECKOUT, PRODUCTPAGE } from "../../constants/route.constants";
import PrimaryCustomButton from "../ui/PrimaryCustomButton";
import SecondaryCustomButton from "../ui/SecondaryCustomButton";
import { useAtomValue, useSetAtom } from "jotai";
import { cartAtom } from "../../atom/store";
const CartSection = () => {
  const cart = useAtomValue(cartAtom);
  const setCart = useSetAtom(cartAtom);
  const navigate = useNavigate();

  const handleIncreaseQuantity = (productId: string) => {
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
      total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
    };
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (productId: string) => {
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
      total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
    };
    setCart(updatedCart);
  };

  const handleRemoveItemFromCart = (productId: string) => {
    const updatedProducts = cart.products.filter(
      (item) => item.id !== productId
    );
    const updatedCart = {
      ...cart,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
    };
    setCart(updatedCart);
  };

  return (
    <section className="mb-15 md:mb-35">
      <div className="mt-10 md:mt-20">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-4 md:pl-10 py-3 md:py-6 rounded-sm shadow-[0px_1px_13px_0px_#0000000D]">
            <div className="text-sm md:text-base">Products</div>
            <div className="text-sm md:text-base">Price</div>
            <div className="text-sm md:text-base">Quantity</div>
            <div className="text-sm md:text-base">Subtotal</div>
          </div>

          <div className="flex flex-col gap-10">
            {cart?.products.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 md:pl-10 py-3 md:py-6 items-center rounded-sm shadow-[0px_1px_13px_0px_#0000000D]"
              >
                <div className="flex flex-row items-center gap-1 md:gap-5">
                  <div className="w-10 h-10 md:w-13.5 md:h-13.5 hidden sm:flex justify-center relative group aspect-square">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-contain md:object-cover"
                    />
                    <div className="hidden group-hover:block">
                      <button
                        onClick={() => handleRemoveItemFromCart(item.id)}
                        className="absolute top-0 -left-1.75 w-4.5 h-4.5 rounded-full bg-button-2 flex justify-center items-center cursor-pointer"
                      >
                        <img src={XIcon} alt="x-icon" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs md:text-base">{item.title}</p>
                </div>
                <p className="text-xs md:text-base">${item.price.toFixed(2)}</p>
                <div className="border-[1.5px] border-black-opacity-40 w-14 sm:w-18 rounded-sm">
                  <div className="flex gap-2 sm:gap-4 items-center justify-center py-1.5 px-3">
                    <p className="text-sm md:text-base min-w-7 text-center">
                      {item.quantity}
                    </p>
                    <div className="flex flex-col">
                      <button
                        className="w-4 h-4 flex justify-center cursor-pointer"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <img src={DropUpIcon} alt="drop-up-icon" />
                      </button>
                      <button
                        className="w-4 h-4 flex justify-center cursor-pointer"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <img src={DropDownIcon} alt="drop-down-icon" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xs md:text-base">${item.total.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <table className="w-full table-fixed">
          <thead>
            <tr className="rounded-sm shadow-[0px_1px_13px_0px_#0000000D] py-3 md:py-6">
              <td className="text-sm md:text-base">Product</td>
              <td className="text-sm md:text-base">Price</td>
              <td className="text-sm md:text-base">Quantity</td>
              <td className="text-sm md:text-base">Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cart?.products.map((item) => (
              <tr key={item.id} className="rounded-sm shadow-[0px_1px_13px_0px_#0000000D] py-3 md:py-6">
                <td>
                  {" "}
                  <div className="flex flex-row items-center gap-2 md:gap-5">
                    <div className="w-13.5 h-13.5 flex justify-center relative group">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="hidden group-hover:block">
                        <button
                          onClick={() => handleRemoveItemFromCart(item.id)}
                          className="absolute top-0 -left-1.75 w-4.5 h-4.5 rounded-full bg-[#DB4444] flex justify-center items-center cursor-pointer"
                        >
                          <img src={XIcon} alt="x-icon" />
                        </button>
                      </div>
                    </div>

                    <p className="text-sm md:text-base">{item.title}</p>
                  </div>
                </td>
                <td className="text-sm md:text-base">{item.price}</td>
                <td>
                  {" "}
                  <div className="border-[1.5px] border-[#00000066] w-18 rounded-sm">
                    <div className="flex gap-4 items-center justify-center py-1.5 px-3">
                      <p className="text-sm md:text-base">{item.quantity}</p>
                      <div className="flex flex-col">
                        <button
                          className="w-4 h-4 flex justify-center cursor-pointer"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          <img src={DropUpIcon} alt="drop-up-icon" />
                        </button>
                        <button
                          className="w-4 h-4 flex justify-center cursor-pointer"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          <img src={DropDownIcon} alt="drop-down-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="text-sm md:text-base">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <div className="flex flex-row justify-between mt-6 flex-wrap gap-4 md:gap-0">
          <SecondaryCustomButton onClick={() => navigate(PRODUCTPAGE)}>
            Return To Shop
          </SecondaryCustomButton>
        </div>

        <div className="mt-11 md:mt-20 flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
          <div className="hidden sm:flex flex-row gap-4">
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Coupon Code"
              className="border rounded-sm text-sm md:text-base py-2 md:py-4 px-6 focus:outline-none"
            />
            <PrimaryCustomButton>Apply Coupon</PrimaryCustomButton>
          </div>
          <div className="border-[1.5px] rounded-sm w-full sm:w-[470px] py-5 md:py-8 px-6">
            <div className="flex flex-col">
              <p className="font-medium text-base md:text-xl">Cart Total</p>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex justify-between">
                  <p className="text-sm md:text-base">Subtotal:</p>
                  <p className="text-sm md:text-base">
                    ${cart?.total?.toFixed(2)}
                  </p>
                </div>
                <hr className="border-black-opacity-40" />
                <div className="flex justify-between">
                  <p className="text-sm md:text-base">Shipping:</p>
                  <p className="text-sm md:text-base">Free</p>
                </div>
                <hr className="border-black-opacity-40" />
                <div className="flex justify-between">
                  <p className="text-sm md:text-base">Total:</p>
                  <p className="text-sm md:text-base">
                    ${cart?.total?.toFixed(2)}
                  </p>
                </div>

                <div className="flex justify-center">
                  <PrimaryCustomButton onClick={() => navigate(CHECKOUT)}>
                    Procees to checkout
                  </PrimaryCustomButton>
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
