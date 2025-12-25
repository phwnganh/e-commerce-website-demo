export const getTimeLef = (targetDate: Date) => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }
// 1 giây = 1000 ms
// 1 ph = 60 giây
// 1 giờ = 60 mins, = 3600 seconds
// 1 ngày có 24h
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // distance % day - phần ms còn dư sau khi bỏ hết số ngày tròn
  // VD: distance = 2 days 5 hours 30 minutes
  // day = 1 day
  // distance % day = 5 hours 30 mins
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};
