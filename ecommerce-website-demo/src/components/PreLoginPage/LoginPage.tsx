import FooterSection from "../FooterSection/FooterSection";
import PreLoginHeaderSection from "../HeaderSection/PreLoginHeaderSection";
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
