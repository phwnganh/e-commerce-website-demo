import PlayStation5 from "../../../public/play-station-5.png";
import WomenCollection from "../../../public/attractive-woman-wearing-hat-posing-black-background1.png";
import AmazonSpeaker from "../../../public/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import GucciPerfume from "../../../public/perfume.png";
const NewProductsAdvertisement = () => {
  return (
    <section className="mt-35 max-w-[1170px] mx-auto p-4 lg:p-0">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] text-sm md:text-base font-semibold">
              Featured
            </p>
          </div>
          <h3 className="font-semibold text-2xl md:text-4xl">New Arrival</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-15">
        <div className="lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2 bg-black text-white rounded-sm">
          <div className="pt-22 px-3 md:px-7 relative">
            <img
              src={PlayStation5}
              alt="play-station-5"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 flex flex-col items-start gap-4 w-[242px]">
              <h4 className="font-semibold text-xl md:text-2xl text-[#FAFAFA]">
                PlayStation 5
              </h4>
              <p className="text-xs md:text-sm text-[#FAFAFA]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="font-medium border-b text-sm md:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-start-3 lg:col-span-2 lg:row-start-1 bg-black text-white rounded-sm relative">
          <img
            src={WomenCollection}
            alt="women-collection"
            className="w-full rounded-l-sm rounded-r-sm h-full object-cover"
          />
          <div className="absolute left-6 bottom-6 gap-4 flex flex-col items-start w-[255px]">
            <h4 className="font-semibold text-xl md:text-2xl text-[#FAFAFA]">
              Women’s Collections
            </h4>
            <p className="text-xs md:text-sm text-[#FAFAFA]">
              Featured woman collections that give you another vibe.
            </p>
            <button className="font-medium border-b text-sm md:text-base">
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:col-start-3 lg:row-start-2 bg-black rounded-sm text-white relative">
          <div className="p-2 md:p-7.5">
            <img
              src={AmazonSpeaker}
              alt="amazon-speaker"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 absolute left-6 bottom-6 items-start">
            <h4 className="font-semibold text-xl md:text-2xl text-[#FAFAFA]">
              Speakers
            </h4>
            <p className="text-xs md:text-sm text-[#FAFAFA]">
              Amazon wireless speakers
            </p>
            <button className="font-medium border-b text-sm md:text-base">
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:col-start-4 lg:row-start-2 rounded-sm bg-black text-white relative">
          <div className="p-2 md:p-7.5">
            <img
              src={GucciPerfume}
              alt="gucci-perfume"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 absolute left-6 bottom-6 items-start">
            <h4 className="font-semibold text-xl md:text-2xl text-[#FAFAFA]">
              Perfume
            </h4>
            <p className="text-xs md:text-sm text-[#FAFAFA]">
              GUCCI INTENSE OUD EDP
            </p>
            <button className="font-medium border-b text-sm md:text-base">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProductsAdvertisement;
