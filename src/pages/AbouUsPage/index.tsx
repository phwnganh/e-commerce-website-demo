import { HOMEPAGE } from "../../constants/route.constants";
import KeyFeatures from "../../components/HomeComponent/KeyFeatures";
import KeyFiguresSection from "../../components/AboutUsComponent/KeyFiguresSection";
import OurStorySection from "../../components/AboutUsComponent/OurStorySection";
import OurTeamSection from "../../components/AboutUsComponent/OurTeamSection";
import BreadCumb from "../../components/ui/BreadCumb";

const AbouUsPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <BreadCumb
        items={[{ label: "Home", to: HOMEPAGE }, { label: "About" }]}
      />
      <OurStorySection />
      <KeyFiguresSection />
      <OurTeamSection />
      <KeyFeatures />
    </main>
  );
};

export default AbouUsPage;
