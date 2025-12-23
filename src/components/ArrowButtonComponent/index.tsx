import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/arrow-right-icon.svg";
const ArrowButtonsComponent = ({
  handlePrev,
  handleNext,
  canScrollNext,
  canScrollPrev,
}: {
  handlePrev: () => void;
  handleNext: () => void;
  canScrollNext?: boolean;
  canScrollPrev?: boolean;
}) => {
  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={handlePrev}
        disabled={!canScrollPrev}
        className={`bg-secondary-2 rounded-full w-9 h-9 sm:w-12 sm:h-12 flex justify-center items-center 
        `}
      >
        <img
          src={LeftArrow1}
          alt="left-arrow"
          className="w-4 h-3 sm:w-[18px] sm:h-4"
        />
      </button>
      <button
        onClick={handleNext}
        disabled={!canScrollNext}
        className={`bg-secondary-2 rounded-full w-9 h-9 sm:w-12 sm:h-12 flex justify-center items-center 

        `}
      >
        <img
          src={RightArrow}
          alt="right-arrow"
          className="w-4 h-3 sm:w-[18px] sm:h-4"
        />
      </button>
    </div>
  );
};

export default ArrowButtonsComponent;
