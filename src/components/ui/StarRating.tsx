import StarFull from "../../assets/star-full.svg";
import StarEmpty from "../../assets/star-empty.svg";
interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}
const StarRating = ({ rating, showNumber = true }: StarRatingProps) => {
  const fullStar = Math.floor(rating);
  const hasHalfStar = rating - fullStar >= 0.5;
  const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center shrink-0">
      {/* full star */}
      {Array(fullStar)
        .fill(0)
        .map((_, i) => (
          <img
            src={StarFull}
            alt="star-full"
            key={`full-${i}`}
            className={`w-3 h-3 md:w-4 md:h-4 max-w-none`}
          />
        ))}

      {/* half star */}
      {hasHalfStar && (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 md:w-4 md:h-4 max-w-none shrink-0 flex-none"
    viewBox="0 0 15 15"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="half-gradient">
        <stop offset="50%" stopColor="#FFAD33" />
        <stop offset="50%" stopColor="#00000040" />
      </linearGradient>
    </defs>

    <path
      d="M13.9461 6.83183C15.0168 6.02194 14.444 4.31527 13.1015 4.31527H10.6724C10.0584 4.31527 9.51615 3.9153 9.33482 3.32878L8.61067 0.986469C8.20403 -0.328848 6.34224 -0.328848 5.93559 0.986469L5.21145 3.32878C5.03012 3.9153 4.48782 4.31527 3.87391 4.31527H1.40274C0.0645511 4.31527 -0.510949 6.01283 0.55135 6.82663L2.66783 8.44802C3.13198 8.80359 3.32627 9.41018 3.15509 9.96926L2.38609 12.4808C1.98729 13.7833 3.4948 14.8304 4.57614 14.0021L6.42174 12.5882C6.9241 12.2033 7.62216 12.2033 8.12452 12.5882L9.95382 13.9896C11.0367 14.8191 12.5457 13.768 12.1428 12.4647L11.3631 9.9428C11.189 9.37985 11.3861 8.76818 11.8561 8.41272L13.9461 6.83183Z"
      fill="url(#half-gradient)"
    />
  </svg>
)}


      {/* empty star */}
      {Array(emptyStar)
        .fill(0)
        .map((_, i) => (
          <img
            key={`empty-${i}`}
            src={StarEmpty}
            alt="star-empty"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        ))}

      {showNumber && (
        <span className="ml-1 md:ml-2 text-xs md:text-sm font-medium opacity-50 hidden sm:block">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
