import React from "react";
import Image from "next/image";
import { TTechStackItem } from "./data";

type TechStackItemProps = {
  item: TTechStackItem;
};

export const TechStackItem = ({ item }: TechStackItemProps) => {
  return (
    <div
      key={item.name}
      className="w-[123px] h-[72px] md:w-[166px] md:h-[94px] flex justify-center items-center bg-white p-1 lg:p-4 transition-transform hover:scale-105 cursor-pointer"
    >
      <Image
        className="object-cover"
        src={item.logo}
        alt={`${item.name} logo`}
      />
    </div>
  );
};
