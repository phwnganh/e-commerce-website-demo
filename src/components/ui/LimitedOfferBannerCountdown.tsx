import { useEffect, useState } from "react";
import { getTimeLef } from "../../utils/getTimeLeft";

const LimitedOfferBannerCountdown = () => {
  const targetDate = new Date("2025-12-31T23:59:59");

  const [timeLeft, setTimeLeft] = useState(() => getTimeLef(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLef(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row gap-4 md:gap-6 justify-center md:justify-start">
      <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
        <p className="font-semibold text-xs md:text-base">{timeLeft.hours}</p>
        <p className="text-[10px] md:text-xs">Hours</p>
      </div>
      <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
        <p className="font-semibold text-xs md:text-base">{timeLeft.days}</p>
        <p className="text-[10px] md:text-xs">Days</p>
      </div>
      <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
        <p className="font-semibold text-xs md:text-base">{timeLeft.minutes}</p>
        <p className="text-[10px] md:text-xs">Minutes</p>
      </div>
      <div className="rounded-full bg-white w-12 h-12 md:w-[62px] md:h-[62px] flex flex-col justify-center items-center">
        <p className="font-semibold text-xs md:text-base">{timeLeft.seconds}</p>
        <p className="text-[10px] md:text-xs">Seconds</p>
      </div>
    </div>
  );
};

export default LimitedOfferBannerCountdown;
