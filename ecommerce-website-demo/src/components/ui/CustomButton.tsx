import React from 'react';

const CustomButton = ({bgColor, children}: {bgColor: string, children: React.ReactNode}) => {
    return (
        <button className={`font-medium text-[#FAFAFA] text-xs md:text-base py-3 px-10 md:py-4 md:px-12 rounded-sm bg-[${bgColor}]`}>
            {children}
        </button>
    );
};

export default CustomButton;