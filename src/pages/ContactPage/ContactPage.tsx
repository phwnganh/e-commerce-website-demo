import { NavLink } from "react-router-dom";
import ContactFormSection from "./ContactFormSection";
import ContactInfoSection from "./ContactInfoSection";
import { CONTACT, HOMEPAGE } from "../../constants/route.constants";

const ContactPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto">
      <div className="mt-20 flex flex-row gap-3 items-center">
        <NavLink to={HOMEPAGE} className="text-black-opacity-80 text-sm">
          Home
        </NavLink>
        <div className="border border-black-opacity-80 rotate-[117.05deg] w-3 h-0"></div>
        <NavLink
          to={CONTACT}
          className={({ isActive }) =>
            `${isActive ? "text-sm" : "text-black-opacity-80 text-sm"}`
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="flex gap-[30px] mt-20 mb-35">
        <ContactInfoSection />
        <ContactFormSection />
      </div>
    </main>
  );
};

export default ContactPage;
