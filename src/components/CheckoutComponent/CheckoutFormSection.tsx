import { useState } from 'react';
import CheckBox from '../../assets/checkbox-icon.svg';
const CheckoutFormSection = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <section className='flex flex-col gap-6'>
            <form className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="firstName" className='text-black-opacity-40'>First Name*</label>
                    <input type="text" name="firstName" id="firstName" className='bg-secondary-2 rounded-sm w-full h-[50px]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="companyName" className='text-black-opacity-40'>Company Name</label>
                    <input type="text" name="companyName" id="companyName" className='bg-secondary-2 rounded-sm w-full h-[50px]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="streetAddress" className='text-black-opacity-40'>Street Address*</label>
                    <input type="text" name="streetAddress" id="streetAddress" className='bg-secondary-2 rounded-sm w-full h-[50px]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="apartment" className='text-black-opacity-40'>Apartment, floor, etc. (optional)</label>
                    <input type="text" name="apartment" id="apartment" className='bg-secondary-2 rounded-sm w-full h-[50px]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="city" className='text-black-opacity-40'>Town/City*</label>
                    <input type="text" name="city" id="city" className='bg-secondary-2 rounded-sm w-full h-[50px]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="phoneNum" className='text-black-opacity-40'>Phone Number*</label>
                    <input type="text" name="phoneNum" id="phoneNum" className='bg-secondary-2 rounded-sm w-full h-[50px]' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-black-opacity-40'>Email Address*</label>
                    <input type="text" name="email" id="email" className='bg-secondary-2 rounded-sm w-full h-[50px]' />
                </div>
            </form>
            <div className='flex gap-4 items-center'>
                <button onClick={handleCheckboxChange} className={`${isChecked && 'rounded-sm bg-button-2'}`}>
                    <img src={CheckBox} alt="checkbox" className={`${isChecked && 'brightness-1 invert'} `}/>
                </button>
                <p className=''>Save this information for faster check-out next time</p>
            </div>
        </section>
    );
};

export default CheckoutFormSection;