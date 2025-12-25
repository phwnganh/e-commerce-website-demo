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
        if (!entry.isIntersecting || isLoading) return;
        setIsLoading(true);

        if (delay) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }

        setVisibleCount((prev) => prev + step);
        setIsLoading(false);
      },
      { threshold: 1 }
    );
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
