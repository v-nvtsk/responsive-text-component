import { useLayoutEffect, useRef, useState } from "react";
import { observe, unobserve } from "./resizeObserverManager";

interface UseResponsiveTextProps {
  items: string[];
}

export const useResponsiveText = ({ items }: UseResponsiveTextProps) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLSpanElement[]>([]);

  const measurementRef = useRef<{ index: number;
    width: number }[]>([]);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container || itemRefs.current.length !== items.length || itemRefs.current.some((el) => !el)) {
      return;
    }

    const measurements = items.map((_, index) => ({
      index: index,
      width: itemRefs.current[index].scrollWidth,
    }));

    measurements.sort((a, b) => b.width - a.width);
    measurementRef.current = measurements;

    const checkSize = (containerWidth: number) => {
      const bestFit = measurementRef.current.find(
        (item) => item.width <= containerWidth,
      );

      const shortestItem = measurementRef.current[measurementRef.current.length - 1];

      const newVisibleIndex = bestFit ? bestFit.index : (shortestItem ? shortestItem.index : 0);

      setVisibleIndex(newVisibleIndex);
    };

    const observerCallback = (entry: ResizeObserverEntry) => {
      checkSize(entry.contentRect.width);
    };

    observe(container, observerCallback);

    checkSize(container.clientWidth);

    return () => {
      if (container) {
        unobserve(container);
      }
    };
  }, [items]);

  return {
    containerRef,
    itemRefs,
    visibleIndex,
  };
};
