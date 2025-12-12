import React from "react";
import prelogin from "../../assets/prelogin.png";

const PreLoginComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-[1170px] mx-auto justify-center mt-15 mb-[140px]">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="hidden lg:flex lg:basis-[60%]">
          <img src={prelogin} alt="pre-login-img" loading="lazy" className="w-full" />
        </div>
        <div className="basis-[40%]">
          <div className="flex justify-end">
            <div className="flex flex-col items-center lg:items-start gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLoginComponent;
