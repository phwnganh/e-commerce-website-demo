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
  size = "sm",
  showNumber = true,
}: StarRatingProps) => {
  const fullStar = Math.floor(rating);
  const hasHalfStar = rating - fullStar >= 0.5;
  const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0);

  const sizeClass =
    size === "lg" ? "w-6 h-6" : size === "md" ? "w-5 h-5" : "w-4 h-4";
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
            className={sizeClass}
          />
        ))}

      {/* half star */}
      {hasHalfStar && (
        <img
          src={StarHalfFilled}
          alt="star-half-filled"
          className={sizeClass}
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
            className={sizeClass}
          />
        ))}

      {showNumber && (
        <span className="ml-2 text-sm font-medium opacity-50">({rating.toFixed(1)})</span>
      )}
    </div>
  );
};

export default StarRating;
