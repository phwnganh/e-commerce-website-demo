import { NavLink } from "react-router-dom";
import { HOMEPAGE, LOGIN } from "../../constants/route.constants";

const PreLoginNavigation = () => {
  return (
    <section className="flex flex-row justify-between items-center py-[7px] px-4 lg:p-0">
      <button className="md:hidden block">
        <svg width="24" height="24" stroke="currentColor">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <h3 className="font-bold text-2xl">Exclusive</h3>
      <div className="hidden lg:flex gap-12 items-center">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 border-b-[#00000080]"
                : "hover:border-b-2 border-b-[#00000080]"
            }`
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
            `${
              isActive ? "border-b-2 border-b-[#00000080]" : "hover:border-b-2"
            }`
          }
        >
          Login
        </NavLink>
      </div>

      <div className=" bg-[#F5F5F5] py-1.75 hidden sm:flex gap-8.5 pl-5 pr-3 rounded-sm">
        <div className="min-w-[153px]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-xs w-full outline-none"
          />
        </div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0 cursor-pointer"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
    </section>
  );
};

export default PreLoginNavigation;
