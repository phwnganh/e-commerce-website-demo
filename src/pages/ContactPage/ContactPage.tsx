import ContactFormSection from "../../components/ContactComponent/ContactFormSection";
import ContactInfoSection from "../../components/ContactComponent/ContactInfoSection";
import { CONTACT, HOMEPAGE } from "../../constants/route.constants";
import BreadCumb from "../../components/ui/BreadCumb";

const ContactPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto px-4 lg:px-0">
      <BreadCumb
        items={[
          { label: "Home", to: HOMEPAGE },
          { label: "Contact", to: CONTACT },
        ]}
      />
      <div className="flex flex-col-reverse md:flex-row gap-[30px] mt-20 mb-35">
        <ContactInfoSection />
        <ContactFormSection />
      </div>
    </main>
  );
};

export default ContactPage;
