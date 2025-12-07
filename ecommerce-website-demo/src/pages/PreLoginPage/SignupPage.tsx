import FooterSection from "../../components/FooterSection/FooterSection";
import PreLoginHeaderSection from "../../components/HeaderSection/PreLoginHeaderSection";
import SignupSection from "./SignupSection";

const SignupPage = () => {
  return (
    <>
      <PreLoginHeaderSection />
      <hr />
      <SignupSection />
      <FooterSection />
    </>
  );
};

export default SignupPage;
