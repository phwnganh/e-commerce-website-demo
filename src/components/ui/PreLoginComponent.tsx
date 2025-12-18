import React from "react";
import prelogin from "../../assets/prelogin.png";

const PreLoginComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    // <section className="max-w-[1170px] mx-auto flex justify-center mt-15 mb-[140px]">
    //   <div className="flex flex-col lg:flex-row items-center">
    //     <div className="hidden lg:flex lg:basis-[60%]">
    //       <img src={prelogin} alt="pre-login-img" className="w-full" />
    //     </div>
    //     <div className="basis-[40%]">
    //       <div className="flex justify-end">
    //         <div className="flex flex-col items-center lg:items-start gap-6">
    //           {children}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative mt-15 mb-35">
      <div
        className="hidden lg:block absolute left-0 inset-y-0 w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${prelogin})` }}
      ></div>
      <div className="relative mx-auto max-w-[1170px]">
        <div className="flex lg:min-h-screen items-center justify-end">
          <div className="w-full max-w lg:max-w-md">
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
