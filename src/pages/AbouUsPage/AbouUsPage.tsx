import { NavLink } from "react-router-dom";
import { ABOUT, HOMEPAGE } from "../../constants/route.constants";
import KeyFeatures from "../HomePage/KeyFeatures";
import KeyFiguresSection from "./KeyFiguresSection";
import OurStorySection from "./OurStorySection";
import OurTeamSection from "./OurTeamSection";

const AbouUsPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto">
      <div className="mt-20 flex flex-row gap-3 items-center">
        <NavLink to={HOMEPAGE} className="text-black-opacity-80 text-sm">
          Home
        </NavLink>
        <div className="border border-black-opacity-80 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink
          to={ABOUT}
          className={({ isActive }) =>
            `${isActive ? "text-sm" : "text-black-opacity-80 text-sm"}`
          }
        >
          About
        </NavLink>
      </div>
      <OurStorySection />
      <KeyFiguresSection />
      <OurTeamSection />
      <KeyFeatures />
    </main>
  );
};

export default AbouUsPage;
