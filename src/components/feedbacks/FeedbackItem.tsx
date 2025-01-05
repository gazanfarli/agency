import React from "react";
import Image from "next/image";
import { TFeedbackItem } from "./data";

type FeedbackItemProps = {
  item: TFeedbackItem;
  isActive: boolean;
  className: string;
  style?: React.CSSProperties;
  onClick: () => void;
};

export const FeedbackItem = ({
  item,
  isActive,
  className,
  style,
  onClick,
}: FeedbackItemProps) => {
  return (
    <div
      className={`${className} ${isActive ? "z-50" : "z-30"}`}
      style={style}
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <div className="w-[60px] h-[60px] md:w-[85px] md:h-[85px] rounded-full overflow-hidden">
          <Image
            src={item.person.image}
            alt={item.person.fullName}
            className="object-cover w-full h-full"
            width={85}
            height={85}
          />
        </div>
        <div className="flex gap-1">
          {Array.from({ length: item.stars }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm md:text-base">
              ★
            </span>
          ))}
        </div>
        <div
          className={`text-center transition-all duration-300 ${
            isActive
              ? "text-[#57007B] text-sm md:text-lg font-medium"
              : "text-[#A0AEC0] text-xs md:text-base"
          }`}
        >
          {item.person.fullName}
        </div>
        <div
          className={`text-center transition-all duration-300 ${
            isActive ? "text-black text-xs md:text-sm" : "text-[#A0AEC0] text-xs"
          }`}
        >
          {item.person.specialty}
        </div>
      </div>
    </div>
  );
};
