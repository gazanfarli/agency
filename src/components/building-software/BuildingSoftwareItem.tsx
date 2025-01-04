import React from "react";
import Image from "next/image";
import { TBuildingSoftwareItem } from "./data";

type BuildingSoftwareItemProps = {
  item: TBuildingSoftwareItem;
};

const BuildingSoftwareItem = ({ item }: BuildingSoftwareItemProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-8 mb-12 ${
        item.id % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 w-full md:w-auto">
        <div className="w-full md:w-[80%] mx-auto">
          <h3 className="text-[24px] md:text-[28px] font-semibold mb-[20px] md:mb-[30px]">
            {item.title}
          </h3>
          <p className="text-base md:text-lg text-[#2D3748] mb-4">
            {item.description}
          </p>
          <div className="flex mb-6">
            <div className="w-[5px] h-[69px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
            <p className="italic text-sm md:text-base ml-[15px] bg-gradient-to-r from-[#57007B] to-[#F76680] text-transparent bg-clip-text">
              {item.quote}
            </p>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <Image src={item.person.image} alt={item.person.name} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base text-[#1A202C]">{item.person.name}</h4>
              <p className="text-[13px] text-[#718096]">{item.person.role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full md:w-auto flex justify-center">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full md:w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BuildingSoftwareItem;
