import { useEffect, useState } from "react";
import { getTimeLef } from "../../utils/getTimeLeft";
import TimeCircle from "./TimeCircle";

const TodayProductsCountdown = () => {
  const targetDate = new Date("2025-12-31T23:59:59");

  const [timeLeft, setTimeLeft] = useState(() => getTimeLef(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLef(targetDate));
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
