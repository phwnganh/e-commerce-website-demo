import ContactFormSection from "./ContactFormSection";
import ContactInfoSection from "./ContactInfoSection";

const ContactPage = () => {
  return (
    <main className="max-w-[1170px] mx-auto">
      <div className="flex gap-[30px] mt-20 mb-35">
        <ContactInfoSection />
        <ContactFormSection />
      </div>
    </main>
  );
};

export default ContactPage;
