import FooterSection from "../../components/FooterSection/FooterSection";
import PreLoginHeaderSection from "../../components/HeaderSection/PreLoginHeaderSection";
import LoginSection from "./LoginSection";

const LoginPage = () => {
  return (
    <>
      <PreLoginHeaderSection />
      <hr className="mt-4 border-[0.5px] border-[#0000004D]" /> <LoginSection />
      <FooterSection />
    </>
  );
};

export default LoginPage;
