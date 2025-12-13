import TomCruise from "../../assets/tom-cruise.png";
import EmmaWatson from "../../assets/emma-watson.png";
import WillSmith from "../../assets/will-smith.png";
import TwitterIcon from "../../assets/Icon-Twitter-black.svg";
import InstagramIcon from "../../assets/icon-instagram-black.svg";
import LinkdlinIcon from "../../assets/Icon-Linkedin-black.svg";
const OurTeamSection = () => {
  return (
    <section className="mt-35 grid grid-cols-3 gap-7.5">
      <div className="flex flex-col gap-5 md:gap-8">
        <div className="rounded-sm bg-secondary-2 aspect-3/4 overflow-hidden pt-9.5">
          <img
            src={TomCruise}
            alt="tom-cruise"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-xl md:text-3xl truncate">
            Tom Cruise
          </h4>
          <p className="text-sm md:text-base truncate">Founder & Chairman</p>
          <div className="mt-4 flex gap-4">
            <img src={TwitterIcon} alt="twitter-icon" />
            <img src={InstagramIcon} alt="instagram-icon" />
            <img src={LinkdlinIcon} alt="linkdlin-icon" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:gap-8">
        <div className="rounded-sm bg-secondary-2 aspect-3/4 overflow-hidden pt-8">
          <img
            src={EmmaWatson}
            alt="emma-witson"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-xl md:text-3xl truncate">
            Emma Watson
          </h4>
          <p className="text-sm md:text-base truncate">Managing Director</p>
          <div className="mt-4 flex gap-4">
            <img src={TwitterIcon} alt="twitter-icon" />
            <img src={InstagramIcon} alt="instagram-icon" />
            <img src={LinkdlinIcon} alt="linkdlin-icon" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:gap-8">
        <div className="rounded-sm bg-secondary-2 aspect-3/4 overflow-hidden pt-9.5">
          <img
            src={WillSmith}
            alt="will-smith"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-xl md:text-3xl truncate">
            Will Smith
          </h4>
          <p className="text-sm md:text-base truncate">Product Designer</p>
          <div className="mt-4 flex gap-4">
            <img src={TwitterIcon} alt="twitter-icon" />
            <img src={InstagramIcon} alt="instagram-icon" />
            <img src={LinkdlinIcon} alt="linkdlin-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
