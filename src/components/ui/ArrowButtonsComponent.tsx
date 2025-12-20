import LeftArrow1 from "../../assets/arrow-left-1.svg";
import RightArrow from "../../assets/arrow-right-icon.svg";
const ArrowButtonsComponent = ({
  handlePrev,
  currentIndex,
  totalGroups,
  handleNext,
}: {
  handlePrev: () => void;
  currentIndex: number;
  totalGroups: number;
  handleNext: () => void;
}) => {
  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`bg-secondary-2 rounded-full w-9 h-9 sm:w-12 sm:h-12 flex justify-center items-center ${
          currentIndex === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200 cursor-pointer"
        }`}
      >
        <img src={LeftArrow1} alt="left-arrow" className="w-4 h-3 sm:w-[18px] sm:h-4"/>
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex === totalGroups - 1}
        className={`bg-secondary-2 rounded-full w-9 h-9 sm:w-12 sm:h-12 flex justify-center items-center ${
          currentIndex === totalGroups - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200 cursor-pointer"
        }`}
      >
        <img src={RightArrow} alt="right-arrow" className="w-4 h-3 sm:w-[18px] sm:h-4"/>
      </button>
    </div>
  );
};

export default ArrowButtonsComponent;
