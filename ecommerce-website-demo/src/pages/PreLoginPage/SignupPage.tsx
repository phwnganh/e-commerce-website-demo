import FooterSection from "../../components/FooterSection/FooterSection";
import PreLoginHeaderSection from "../../components/HeaderSection/PreLoginHeaderSection";
import SignupSection from "./SignupSection";

const SignupPage = () => {
  return (
    <>
      <PreLoginHeaderSection />
      <hr className="mt-4 border-[0.5px] border-[#0000004D]" />{" "}
      <SignupSection />
      <FooterSection />
    </>
  );
};

export default SignupPage;
