import Header from "./Header";
import LandingPage from "./LandingPage";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1190px] mx-auto">
        <LandingPage />
      </div>
    </div>
  );
};

export default MainPage;
