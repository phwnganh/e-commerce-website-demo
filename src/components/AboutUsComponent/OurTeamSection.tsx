import TomCruise from "../../assets/tom-cruise.png";
import EmmaWatson from "../../assets/emma-watson.png";
import WillSmith from "../../assets/will-smith.png";
import TwitterIcon from "../../assets/twitter-black-icon.svg";
import InstagramIcon from "../../assets/instagram-black-icon.svg";
import LinkdlinIcon from "../../assets/linkedin-black-icon.svg";
const OurTeamSection = () => {
  const TEAM_MEMBERS = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      avatar: TomCruise
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      avatar: EmmaWatson
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      avatar: WillSmith
    }
  ]
  return (
    <section className="mt-15 md:mt-35 grid grid-cols-3 gap-4 md:gap-7.5">
      {TEAM_MEMBERS.map((member, index) => (
      <div className="flex flex-col gap-2 md:gap-8" key={index}>
        <div className="rounded-sm bg-secondary-2 aspect-3/4 overflow-hidden pt-2 md:pt-9.5">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <h4 className="font-medium text-base md:text-3xl">
            {member.name}
          </h4>
          <p className="text-xs md:text-base">{member.role}</p>
          <div className="mt-1 md:mt-4 flex gap-2 md:gap-4">
            <img src={TwitterIcon} alt="twitter-icon" className="w-4 h-4 md:w-6 md:h-6"/>
            <img src={InstagramIcon} alt="instagram-icon" className="w-4 h-4 md:w-6 md:h-6"/>
            <img src={LinkdlinIcon} alt="linkdlin-icon" className="w-4 h-4 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
      ))}
    </section>
  );
};

export default OurTeamSection;
