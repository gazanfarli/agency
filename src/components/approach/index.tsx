import React from "react";
import Image from "next/image";
import { approachItems, TApproachItem } from "@/data";

type ApproachItemProps = {
  item: TApproachItem;
};

const ApproachItem = ({ item }: ApproachItemProps) => {
  return (
    <div className="flex gap-6 px-8 pt-[59px] pb-[39px] bg-white border border-[#E5E5E5]">
      <div className="flex justify-center">
        <div
          className={`w-14 h-[56px] flex justify-center items-center rounded-[10px] ${item.gradient}`}
        >
          <Image src={item.icon} alt={item.title} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-[10px]">{item.title}</h3>
        <p className="text-sm text-gray-700 font-normal">{item.description}</p>
      </div>
    </div>
  );
};

export const Approach = () => {
  return (
    <section id="approach" className="bg-[#F7F7FA] px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-3xl lg:text-4xl text-[#1A202C]">
          Our design and <span className="font-bold">development approach</span>
        </h2>
      </div>

      <div className="grid max-w-[1233px] grid-cols-1 gap-4 md:gap-8 lg:gap-8 mx-auto lg:grid-cols-2 mb-6 md:mb-12 lg:mb-24">
        {approachItems.map((item) => (
          <ApproachItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};
