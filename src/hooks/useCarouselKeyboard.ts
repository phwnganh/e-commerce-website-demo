import { useCallback, type KeyboardEvent } from "react";

type UseCarouselKeyboardProps = {
  onPrev: () => void;
  onNext: () => void;
};
export const useCarouselKeyboard = ({
  onPrev,
  onNext,
}: UseCarouselKeyboardProps) => {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "arrow-left") {
        e.preventDefault();
        onPrev();
      }
      if (e.key === "arrow-right") {
        e.preventDefault();
        onNext();
      }
    },
    [onPrev, onNext]
  );
  return { onKeyDown };
};
