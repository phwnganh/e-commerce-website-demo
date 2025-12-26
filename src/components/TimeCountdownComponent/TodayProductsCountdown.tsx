import { useEffect, useState } from "react";
import { getTimeLef } from "../../utils/getTimeLeft";
import TimeCircle from "../ui/TimeCircle";
import {TARGET_DATE} from "../../types/countdownDate.type.ts";

const TodayProductsCountdown = () => {

  const [timeLeft, setTimeLeft] = useState(() => getTimeLef(TARGET_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLef(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-3 sm:gap-4.5">
      <div className="">
        <p className="text-xs">Days</p>
        <h3 className="font-bold text-xl md:text-3xl">{timeLeft.days}</h3>
      </div>
      <TimeCircle />
      <div>
        <p className="text-xs">Hours</p>
        <h3 className="font-bold text-xl md:text-3xl">{timeLeft.hours}</h3>
      </div>
      <TimeCircle />
      <div>
        <p className="text-xs">Minutes</p>
        <h3 className="font-bold text-xl md:text-3xl">{timeLeft.minutes}</h3>
      </div>
      <TimeCircle />
      <div>
        <p className="text-xs">Seconds</p>
        <h3 className="font-bold text-xl md:text-3xl">{timeLeft.seconds}</h3>
      </div>
    </div>
  );
};

export default TodayProductsCountdown;
