import { NavLink } from "react-router-dom";
import { HOMEPAGE, LOGIN, SIGNUP } from "../../constants/route.constants";

const PreLoginNavigation = () => {
  return (
    <section className="flex flex-row justify-between items-center py-[7px]">
      <h3 className="font-bold text-2xl">Exclusive</h3>
      <div className="flex gap-12 items-center">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "border-b-2" : "hover:border-b-2"}`
          }
          to={HOMEPAGE}
        >
          Home
        </NavLink>
        <div>Contact</div>
        <div>About</div>
        <NavLink
          to={LOGIN}
          className={({ isActive }) =>
            `${isActive ? "border-b-2" : "hover:border-b-2"}`
          }
        >
          Login
        </NavLink>
      </div>

      <div className=" bg-[#F5F5F5] py-1.75 flex gap-8.5 pl-5 pr-3 rounded-sm">
        <div className="min-w-[153px]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-xs w-full"
          />
        </div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
    </section>
  );
};

export default PreLoginNavigation;
