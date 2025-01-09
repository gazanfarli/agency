import React from "react";
import { processItems } from "./data";
import { ProcessItem } from "./ProcessItem";

export const Process = () => {
  return (
    <section id="process" className="px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[50px] h-[3px] md:w-[69px] md:h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-xl md:text-2xl lg:text-4xl text-[#1A202C]">
          How development{" "}
          <span className="font-bold">through Alcaline works</span>
        </h2>
      </div>

      <div className="max-w-[1233px] mx-auto mb-6 md:mb-12 lg:mb-24">
        <div className="flex flex-wrap justify-center md:justify-around md:grid-cols-3 gap-3 lg:gap-6">
          {processItems.map((item) => (
            <ProcessItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
