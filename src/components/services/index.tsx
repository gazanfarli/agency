"use client";

import React from "react";
import { serviceItems } from "./data";
import { ServiceItem } from "./ServiceItem";
import { DotsNavigation } from "./DotsNavigation";
import { ServicesCount } from "./ServicesCount";
import { useCarousel } from "@/hooks/useCarousel";

export const Services = () => {
  const {
    activeIndex,
    handleDotClick,
    handleDragStart,
    handleDragEnd,
    getVisibleItems,
  } = useCarousel(serviceItems.length);

  return (
    <section id="services" className="bg-[#F7F7FA] px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <h2 className="flex flex-col text-center text-2xl lg:text-4xl font-bold text-[#1A202C]">
          Services we offer
        </h2>
      </div>

      <div
        className="relative max-w-[1233px] mx-auto overflow-hidden mb-6 md:mb-12 lg:mb-24"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex justify-center items-center mb-10 md:mb-16">
          {getVisibleItems().map(({ index, relativePosition }) => (
            <ServiceItem
              key={serviceItems[index].id}
              item={serviceItems[index]}
              relativePosition={relativePosition}
              onClick={() =>
                handleDotClick(
                  (activeIndex + relativePosition + serviceItems.length) %
                    serviceItems.length
                )
              }
            />
          ))}
        </div>

        <DotsNavigation
          activeIndex={activeIndex}
          totalItems={serviceItems.length}
          onDotClick={handleDotClick}
        />
        <ServicesCount
          activeIndex={activeIndex}
          totalItems={serviceItems.length}
        />
      </div>
    </section>
  );
};
