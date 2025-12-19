import OurStoryBanner from "../../assets/aboutus-banner.png";
const OurStorySection = () => {
  return (
    // <section className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center mt-10">
    //   <div className="flex flex-col gap-4 md:gap-6">
    //     <h1 className="mt-4 text-4xl md:text-[54px] font-semibold text-justify">
    //       Our Story
    //     </h1>
    //     <p className="text-sm md:text-base">
    //       Launced in 2015, Exclusive is South Asia’s premier online shopping
    //       makterplace with an active presense in Bangladesh. Supported by wide
    //       range of tailored marketing, data and service solutions, Exclusive has
    //       10,500 sallers and 300 brands and serves 3 millioons customers across
    //       the region.{" "}
    //     </p>
    //     <p className="text-sm md:text-base">
    //       Exclusive has more than 1 Million products to offer, growing at a very
    //       fast. Exclusive offers a diverse assotment in categories ranging from
    //       consumer.
    //     </p>
    //   </div>
    //   <div className="w-full h-full">
    //     <img
    //       src={OurStoryBanner}
    //       alt="our-story-banner"
    //       className="w-full h-full object-cover rounded-sm"
    //     />
    //   </div>
    // </section>
    <section className="relative mt-10">
      <div className="lg:min-h-screen max-w-[1170px] flex items-start lg:items-center justify-center lg:justify-start mx-auto relative">
        <div className="flex flex-col gap-4 md:gap-6 max-w-lg">
          <h1 className="mt-4 text-4xl md:text-[54px] font-semibold text-justify">
            Our Story
          </h1>
          <p className="text-sm md:text-base">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-sm md:text-base">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>

      <div
        className="hidden lg:block absolute inset-y-0 right-0 bg-cover bg-center bg-no-repeat w-1/2"
        style={{ backgroundImage: `url(${OurStoryBanner})` }}
      ></div>
    </section>
  );
};

export default OurStorySection;
