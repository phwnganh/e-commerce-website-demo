import PlayStation5 from "../../../public/play-station-5.png";
import WomenCollection from "../../../public/attractive-woman-wearing-hat-posing-black-background1.png";
import AmazonSpeaker from "../../../public/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import GucciPerfume from '../../../public/perfume.png'
const NewProductsAdvertisement = () => {
  return (
    <section className="mt-35 max-w-[1170px] mx-auto">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold">Featured</p>
          </div>
          <h3 className="font-semibold text-4xl">New Arrival</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-15">
        <div className="col-start-1 col-span-2 row-start-1 row-span-2 bg-black text-white rounded-sm">
          <div className="pt-22 px-7 relative">
            <img src={PlayStation5} alt="play-station-5" />
            <div className="absolute bottom-8 flex flex-col items-start gap-4 w-[242px]">
              <h4 className="font-semibold text-2xl text-[#FAFAFA]">
                PlayStation 5
              </h4>
              <p className="text-sm text-[#FAFAFA]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="font-medium border-b">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-span-2 row-start-1 bg-black text-white rounded-sm relative">
          <img
            src={WomenCollection}
            alt="women-collection"
            className="w-full rounded-l-sm rounded-r-sm"
          />
          <div className="absolute left-6 bottom-6 gap-4 flex flex-col items-start w-[255px]">
            <h4 className="font-semibold text-2xl text-[#FAFAFA]">
              Women’s Collections
            </h4>
            <p className="text-sm text-[#FAFAFA]">
              Featured woman collections that give you another vibe.
            </p>
            <button className="font-medium border-b">Shop Now</button>
          </div>
        </div>
        <div className="col-start-3 row-start-2 bg-black rounded-sm text-white relative">
          <div className="p-7.5">
            <img src={AmazonSpeaker} alt="amazon-speaker" />
          </div>
          <div className="flex flex-col gap-2 absolute left-6 bottom-6 items-start">
            <h4 className="font-semibold text-2xl text-[#FAFAFA]">Speakers</h4>
            <p className="text-sm text-[#FAFAFA]">Amazon wireless speakers</p>
            <button className="font-medium border-b">Shop Now</button>
          </div>
        </div>
        <div className="col-start-4 row-start-2 rounded-sm bg-black text-white relative">
            <div className="p-7.5">
            <img src={GucciPerfume} alt="amazon-speaker" />
          </div>
          <div className="flex flex-col gap-2 absolute left-6 bottom-6 items-start">
            <h4 className="font-semibold text-2xl text-[#FAFAFA]">Perfume</h4>
            <p className="text-sm text-[#FAFAFA]">GUCCI INTENSE OUD EDP</p>
            <button className="font-medium border-b">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProductsAdvertisement;
