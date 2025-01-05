"use client";

import React from "react";
import { feedbackItems } from "./data";
import { FeedbackItem } from "./FeedbackItem";
import { calculateItemPosition } from "./calculateItemPosition";
import { useFeedbackCarousel } from "@/hooks/useFeedbackCarousel";

export const Feedbacks = () => {
  const {
    currentIndex,
    isAnimating,
    handleNext,
    handlePrev,
    handleDragStart,
    handleDragEnd,
    setDragStart,
    setCurrentIndex,
    setIsAnimating,
  } = useFeedbackCarousel(feedbackItems.length);

  return (
    <section id="feedbacks" className="px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[50px] h-[3px] md:w-[69px] md:h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-xl md:text-2xl lg:text-4xl text-[#1A202C]">
          Why customers love <span className="font-bold">working with us</span>
        </h2>
      </div>

      <div className="max-w-[1233px] mx-auto mb-6 md:mb-12 lg:mb-24">
        <div
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] max-h-[180px] px-6 md:px-4 mx-auto text-sm md:text-base lg:text-lg text-[#718096] text-center mb-12 transition-opacity duration-300"
          style={{ opacity: isAnimating ? 0 : 1 }}
        >
          {feedbackItems[currentIndex].feedbackContent}
        </div>

        <div
          className="relative overflow-hidden flex justify-center px-4 md:px-8 lg:px-12"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setDragStart(null)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div className="relative min-h-[180px] md:min-h-[250px] lg:min-h-[300px] flex items-center justify-center py-4 md:py-6 lg:py-8">
            {feedbackItems.map((item, index) => {
              const { className, style } = calculateItemPosition(
                index,
                currentIndex,
                feedbackItems.length
              );

              return (
                <FeedbackItem
                  key={item.id}
                  item={item}
                  isActive={index === currentIndex}
                  className={className}
                  style={style}
                  onClick={() => {
                    if (index !== currentIndex && !isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                    }
                  }}
                />
              );
            })}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
            disabled={isAnimating}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
            disabled={isAnimating}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};
