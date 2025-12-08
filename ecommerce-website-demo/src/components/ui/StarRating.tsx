import StarFull from "../../assets/star-full.svg";
import StarHalfFilled from "../../assets/star-half-filled.svg";
import StarEmpty from "../../assets/star-empty.svg";
interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}
const StarRating = ({
  rating,
  showNumber = true,
}: StarRatingProps) => {
  const fullStar = Math.floor(rating);
  const hasHalfStar = rating - fullStar >= 0.5;
  const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center">
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
        <img
          src={StarHalfFilled}
          alt="star-half-filled"
          className="w-3 h-3 md:w-4 md:h-4"
        />
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
