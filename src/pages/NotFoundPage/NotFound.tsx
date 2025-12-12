import { NavLink, useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-[1170px] mx-auto mt-20 px-4 lg:px-0">
      <div className="flex flex-row gap-3 items-center">
        <NavLink to={HOMEPAGE} className="opacity-50 text-sm">
          Home
        </NavLink>
        <div className="border opacity-50 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink
          to={"*"}
          className={({ isActive }) =>
            `${isActive ? "text-sm" : "text-[#00000080] text-sm"}`
          }
        >
          404 Error
        </NavLink>
      </div>

      <div className="my-35 flex flex-col gap-10 text-center">
        <h1 className="font-medium text-[110px]">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <div className="mt-10">
          <PrimaryCustomButton onClick={() => navigate(HOMEPAGE)}>
            Back to home page
          </PrimaryCustomButton>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
