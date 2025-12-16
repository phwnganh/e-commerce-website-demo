import { useAtomValue } from "jotai";
import { cartAtom } from "../../atom/store";
import Bkash from "../../assets/Bkash.svg";
import Visa from "../../assets/Visa.svg";
import MasterCard from "../../assets/MasterCard.svg";
import Nagad from "../../assets/Nagad.svg";
import PrimaryCustomButton from "../ui/PrimaryCustomButton";
const CheckoutInfoSection = () => {
  const cart = useAtomValue(cartAtom);
  return (
    <section className="flex flex-col gap-8 mt-8">
      {cart.products.map((item) => (
        <div key={item.id} className="">
          <div className="flex items-center gap-6">
            <div className="w-13.5 h-13.5 flex justify-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-between w-full">
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>${cart.total.toFixed(2)}</p>
        </div>
        <hr className="border-t-black-opacity-40" />
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <hr className="border-t-black-opacity-40" />
        <div className="flex justify-between">
          <p>Total:</p>
          <p>${cart.total.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4 items-end">
          <input
            type="radio"
            name="radio-input"
            id="bank-radio-input"
            className="w-6 h-6"
          />
          <p>Bank</p>
        </div>
        <div className="flex gap-2">
          <img src={Bkash} alt="bkash" />
          <img src={Visa} alt="visa" />
          <img src={MasterCard} alt="mastercard" />
          <img src={Nagad} alt="nagad" />
        </div>
      </div>

      <div className="flex gap-4 items-end">
        <input
          type="radio"
          name="radio-input"
          id="cash-radio-input"
          className="w-6 h-6"
        />
        <p>Cash on delivery</p>
      </div>

      <div className="flex flex-row gap-4">
        <input
          type="text"
          name="code"
          id="code"
          placeholder="Coupon Code"
          className="border rounded-sm text-sm md:text-base py-2 md:py-4 pl-6 focus:outline-none"
        />
        <PrimaryCustomButton>Apply Coupon</PrimaryCustomButton>
      </div>
      <div className="flex justify-start">
        <PrimaryCustomButton>Place Order</PrimaryCustomButton>
      </div>
    </section>
  );
};

export default CheckoutInfoSection;
