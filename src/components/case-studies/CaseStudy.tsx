import React from "react";
import Image from "next/image";
import { TCaseStudyItem } from "./data";

type CaseStudyProps = {
  item: TCaseStudyItem;
};

export const CaseStudy = ({ item }: CaseStudyProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#F1F2FF] rounded-l-xl rounded-r-xl md:rounded-r-[30px] border border-[#E7DAED] overflow-hidden shadow-lg">
      <div className="flex-1 h-full">
        <Image
          src={item.image}
          alt="Case study"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="flex-1 px-6 md:px-12 pt-8 pb-6 md:pt-16 md:pb-12 flex flex-col justify-center">
        <h3 className="text-[24px] md:text-[28px] font-semibold mb-[20px] md:mb-[30px]">
          {item.title}
        </h3>
        <p className="text-base md:text-lg text-[#2D3748] mb-4">
          {item.description}
        </p>
      </div>
    </div>
  );
};
