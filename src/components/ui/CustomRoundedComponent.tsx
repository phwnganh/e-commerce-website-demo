import type React from "react";

const CustomRoundedComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-full bg-primary-2-opacity-30 p-3 w-20 h-20 group-hover:bg-white-opacity-30">
      <div className="rounded-full bg-black p-2 group-hover:bg-white">
        <div className="w-10 h-10 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomRoundedComponent;
