import React from "react";
import { CaseStudy } from "./CaseStudy";
import { caseStudyItems } from "./data";

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="bg-[#F7F7FA] px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-3xl lg:text-4xl text-[#1A202C]">
          Our recent <span className="font-bold">Case studies</span>
        </h2>
      </div>
      <div className="max-w-[1233px] mx-auto grid gap-8 mb-6 md:mb-12 lg:mb-24">
        {caseStudyItems.map((item) => (
          <CaseStudy key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
