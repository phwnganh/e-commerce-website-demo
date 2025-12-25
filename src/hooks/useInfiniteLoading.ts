import { useEffect, useRef, useState } from "react";

export const useInfiniteLoading = ({
  totalCount,
  step = 8,
  delay = 0,
}: {
  totalCount: number;
  step?: number;
  delay?: number;
}) => {
  const [visibleCount, setVisibleCount] = useState(step);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibleCount >= totalCount || isLoading) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        // entry.isIntersecting = true - đang hiển thị trên viewport
        // ngược lại, không hiển thị trên viewport -> thay vào đó, hiển thị loading spin để ng dùng nhận biết
        if (!entry.isIntersecting || isLoading) return;
        setIsLoading(true);
        // delay 1s nữa để 8 item tiếp theo xuất hiện
        if (delay) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }

        setVisibleCount((prev) => prev + step);
        setIsLoading(false);
      },
      // khi item hiển thị 100% -> có threshold = 1
      { threshold: 1 }
    );

    // sau khi scroll tới cuối trang -> loadMoreRef được activate -> hiển thị các item ở dưới trong viewport
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, totalCount, step, delay, isLoading]);

  return {
    visibleCount,
    isLoading,
    loadMoreRef,
  };
};
