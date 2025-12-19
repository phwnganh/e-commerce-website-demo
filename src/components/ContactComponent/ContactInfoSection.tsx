import PhoneIcon from "../../assets/phone-icon.svg";
import MailIcon from "../../assets/mail-icon.svg";
const ContactInfoSection = () => {
  return (
    <section className="shadow-[0_1px_13px_0_#0000000D] rounded-sm px-4 md:px-[35px] pt-5 md:pt-10 pb-8 md:pb-[51px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-button-2 rounded-full w-10 h-10 flex justify-center items-center">
                <img src={PhoneIcon} alt="phone-icon" className="" />
              </div>
              <p className="font-medium">Call To Us</p>
            </div>
            <p className="mt-2 text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>
          <hr className="border border-black-opacity-30" />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-button-2 rounded-full w-10 h-10 flex justify-center items-center">
                <img src={MailIcon} alt="mail-icon" />
              </div>
              <p className="font-medium">Write To US</p>
            </div>
            <p className="text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>
    </section>
  );
};

export default ContactInfoSection;
