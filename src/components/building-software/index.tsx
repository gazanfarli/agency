import React from "react";

import BuildingSoftwareItem from "./BuildingSoftwareItem";
import { buildingSoftwareItems } from "./data";

export const BuildingSoftware = () => {
  return (
    <section id="building-software" className="bg-white px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-3xl lg:text-4xl text-[#1A202C]">
          Way of building <span className="font-bold">Great Software</span>
        </h2>
      </div>
      <div className="max-w-[1233px] mx-auto">
        {buildingSoftwareItems.map((item) => (
          <BuildingSoftwareItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
