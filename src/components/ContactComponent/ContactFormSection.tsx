import PrimaryCustomButton from "../ui/PrimaryCustomButton";

const ContactFormSection = () => {
  return (
    <section className="shadow-[0_1px_13px_0_#0000000D] rounded-sm py-10 px-8">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name *"
            className="py-[13px] pl-4 rounded-sm bg-secondary-2 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email *"
            className="py-[13px] pl-4 rounded-sm bg-secondary-2 focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Your Phone *"
            className="py-[13px] pl-4 rounded-sm bg-secondary-2 focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          id="message"
          rows={8}
          placeholder="Your Massage"
          className="py-[13px] pl-4 rounded-sm bg-secondary-2 focus:outline-none resize-none"
        ></textarea>
        <div className="flex justify-center md:justify-end">
          <PrimaryCustomButton>Send Massage</PrimaryCustomButton>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
