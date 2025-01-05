import { useState } from "react";

export const useCarousel = (totalItems: number) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    sessionStorage.setItem("dragStartX", clientX.toString());
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const dragStartX = parseFloat(sessionStorage.getItem("dragStartX") || "0");
    const dragDistance = dragStartX - clientX;

    if (dragDistance > 50) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    } else if (dragDistance < -50) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + totalItems) % totalItems;
      items.push({ index, relativePosition: i });
    }
    return items;
  };

  return {
    activeIndex,
    setActiveIndex,
    handleDotClick,
    handleDragStart,
    handleDragEnd,
    getVisibleItems,
  };
};
