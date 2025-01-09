import React from "react";
import { TechStackItem } from "./TechStackItem";
import { techStackItems } from "./data";

export const TechStack = () => {
  return (
    <section id="tech-stack" className="bg-white px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-3xl lg:text-4xl text-[#1A202C]">
          Our <span className="font-bold">Tech stack</span>
        </h2>
      </div>

      <div className="max-w-[1233px] flex flex-wrap justify-center mx-auto mb-6 md:mb-12 lg:mb-24 gap-4 md:gap-8 lg:gap-12">
        {techStackItems.map((item) => (
          <TechStackItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
