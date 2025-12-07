import prelogin from "../../assets/prelogin.png";
import googleIcon from "../../assets/Icon-Google.svg";
const SignupSection = () => {
  return (
    <section className="justify-center mt-15 mb-[140px] max-w-[1170px] mx-auto">
      <div className="flex items-center">
        <div className="flex-[0_0_60%]">
          <img src={prelogin} alt="pre-login-img" className="w-full" />
        </div>
        <div className="flex-[0_0_40%]">
          <div className="flex justify-end">
            <div className="flex flex-col gap-6">
              <h3 className="text-4xl">Create an account</h3>
              <p>Enter your details below</p>

              <form className="mt-12 flex flex-col gap-10" method="post">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-b-2 opacity-50 pb-2"
                  placeholder="Name"
                />

                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Email or Phone Number"
                  className="border-b-2 opacity-50 pb-2"
                />

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border-b-2 opacity-50 pb-2"
                />
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="bg-[#DB4444] text-[#FAFAFA] rounded-sm py-4"
                  >
                    Create Account
                  </button>
                  <button className="flex flex-row gap-4 justify-center border border-[#00000066] rounded-sm py-4">
                    <img src={googleIcon} alt="google-icon" />
                    <span>Sign up with Google</span>
                  </button>
                  <div className="mt-4 flex flex-row gap-4 justify-center">
                    <p>Already have account?</p>
                    <a className="border-b" href="#">
                      Login
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
