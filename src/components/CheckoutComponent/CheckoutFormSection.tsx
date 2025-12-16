import { useState } from "react";
import CheckBox from "../../assets/checkbox-icon.svg";
const CheckoutFormSection = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section className="flex flex-col gap-5 md:gap-6">
      <form className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="firstName"
            className="text-black-opacity-40 text-sm md:text-base"
          >
            First Name<span className="text-button-2">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="bg-secondary-2 rounded-sm w-full h-10 md:h-[50px] focus:outline-none px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="companyName"
            className="text-black-opacity-40 text-sm md:text-base"
          >
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="bg-secondary-2 rounded-sm w-full h-10 md:h-[50px] focus:outline-none px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="streetAddress"
            className="text-black-opacity-40 text-sm md:text-base"
          >
            Street Address<span className="text-button-2">*</span>
          </label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            className="bg-secondary-2 rounded-sm w-full h-10 md:h-[50px] focus:outline-none px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="apartment"
            className="text-black-opacity-40 text-sm md:text-base"
          >
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            name="apartment"
            id="apartment"
            className="bg-secondary-2 rounded-sm w-full h-10 md:h-[50px] focus:outline-none px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="city"
            className="text-black-opacity-40 text-sm md:text-base"
          >
            Town/City<span className="text-button-2">*</span>
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="bg-secondary-2 rounded-sm w-full h-10 md:h-[50px] focus:outline-none px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phoneNum"
            className="text-black-opacity-40 text-sm md:text-base"
          >
            Phone Number<span className="text-button-2">*</span>
          </label>
          <input
            type="text"
            name="phoneNum"
            id="phoneNum"
            className="bg-secondary-2 rounded-sm w-full h-10 md:h-[50px] focus:outline-none px-4"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-black-opacity-40 text-sm md:text-base"
          >
            Email Address<span className="text-button-2">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-secondary-2 rounded-sm w-full h-10 md:h-[50px] focus:outline-none px-4"
          />
        </div>
      </form>
      <div className="flex gap-4 items-center">
        <button
          onClick={handleCheckboxChange}
          className={`${isChecked && "rounded-sm bg-button-2"}`}
        >
          <img
            src={CheckBox}
            alt="checkbox"
            className={`${
              isChecked && "brightness-1 invert"
            } w-4 h-4 md:w-6 md:h-6`}
          />
        </button>
        <p className="text-sm md:text-base">
          Save this information for faster check-out next time
        </p>
      </div>
    </section>
  );
};

export default CheckoutFormSection;
