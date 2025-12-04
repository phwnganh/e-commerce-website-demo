import prelogin from "../../assets/prelogin.png";
const LoginSection = () => {
  return (
    <section className="max-w-[1170px] mx-auto justify-center mt-15 mb-[140px]">
      <div className="flex items-center">
        <div className="flex-[0_0_60%]">
          <img src={prelogin} alt="pre-login-img" className="w-full" />
        </div>
        <div className="flex-[0_0_40%]">
          <div className="flex justify-end">
            <div className="flex flex-col gap-6">
              <h3 className="text-4xl">Log in to Exclusive</h3>
              <p>Enter your details below</p>
              <form className="mt-12 flex flex-col gap-10" method="post">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="border-b-2 opacity-50 pb-2"
                  placeholder="Email or Phone Number"
                />

                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-b-2 opacity-50 pb-2"
                  placeholder="Password"
                />

                <div className="flex flex-row gap-21.5 items-center">
                  <button
                    type="submit"
                    className="bg-[#DB4444] text-[#FAFAFA] rounded-sm py-4 px-12"
                  >
                    Log In
                  </button>
                  <a href="#" className="text-[#DB4444]">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
