import googleIcon from "../../assets/Icon-Google.svg";
import PreLoginComponent from "../../components/ui/PreLoginComponent";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { LOGIN } from "../../constants/route.constants";
const SignupSection = () => {
  return (
    <PreLoginComponent>
      <h3 className="text-2xl md:text-4xl">Create an account</h3>
      <p className="text-sm md:text-base">Enter your details below</p>

      <form className="mt-12 flex flex-col gap-10 w-full" method="post">
        <input
          type="text"
          name="name"
          id="name"
          className="border-b-2 opacity-50 pb-2 focus:outline-none"
          placeholder="Name"
        />

        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Email or Phone Number"
          className="border-b-2 opacity-50 pb-2 focus:outline-none"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="border-b-2 opacity-50 pb-2"
        />
        <div className="flex flex-col gap-4">
          <PrimaryCustomButton type="submit">
            Create Account
          </PrimaryCustomButton>
          <button className="flex flex-row gap-4 justify-center border border-[#00000066] rounded-sm py-4">
            <img src={googleIcon} alt="google-icon" loading="lazy" />
            <span>Sign up with Google</span>
          </button>
          <div className="mt-4 flex flex-row gap-4 justify-center">
            <p className="text-sm md:text-base text-[#000000B3]">
              Already have account?
            </p>
            <a
              className="text-sm text-[#000000B3] font-medium md:text-base border-b border-transparent hover:border-b-[#00000080]"
              href={LOGIN}
            >
              Login
            </a>
          </div>
        </div>
      </form>
    </PreLoginComponent>
  );
};

export default SignupSection;
