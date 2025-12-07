import FooterSection from "../../components/FooterSection/FooterSection";
import PreLoginHeaderSection from "../../components/HeaderSection/PreLoginHeaderSection";
import LoginSection from "./LoginSection";

const LoginPage = () => {
  return (
    <>
      <PreLoginHeaderSection />
      <hr />
      <LoginSection />
      <FooterSection />
    </>
  );
};

export default LoginPage;
