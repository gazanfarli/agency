import React from "react";
import { TServiceItem } from "./data";

type ServiceItemProps = {
  item: TServiceItem;
  relativePosition: number;
  onClick: () => void;
};

export const ServiceItem = ({
  item,
  relativePosition,
  onClick,
}: ServiceItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 w-[250px] h-[287px] mx-2 md:mx-4 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer ${
        Math.abs(relativePosition) === 2 ? "opacity-30 scale-75" : ""
      } ${Math.abs(relativePosition) === 1 ? "opacity-60 scale-85" : ""} ${
        relativePosition === 0 ? "opacity-100 scale-105 z-10" : ""
      }`}
      style={{
        transform: `translateX(${relativePosition * 10}px) ${
          relativePosition === 0 ? "translateY(20px)" : ""
        }`,
        transition: 'all 700ms ease'
      }}
    >
      <div
        className={`relative w-full h-full ${
          relativePosition === 0
            ? "p-[1px] bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-lg"
            : ""
        }`}
      >
        <div className="w-full h-full bg-white rounded-lg px-4 py-9 shadow-md">
          <div className="relative flex justify-center items-center w-[58px] h-[58px] mb-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-full p-[1px]">
              <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                {<item.icon className="w-8 h-8" />}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-5 bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
            {item.title}
          </h3>
          <p className="text-sm text-[#4A5568]">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
