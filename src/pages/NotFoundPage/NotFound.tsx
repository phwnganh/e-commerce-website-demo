import { NavLink, useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import BreadCumb from "../../components/ui/BreadCumb";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <BreadCumb
        items={[
          {
            label: "Home",
            to: HOMEPAGE,
          },
          {
            label: "404 Error",
            to: "*",
          },
        ]}
      />

      <div className="my-35 flex flex-col gap-10 text-center">
        <h1 className="font-medium text-[110px]">404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <div className="mt-10">
          <PrimaryCustomButton onClick={() => navigate(HOMEPAGE)}>
            Back to home page
          </PrimaryCustomButton>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
