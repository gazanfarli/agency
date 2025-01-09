import { truncate } from "@/lib/utils";
import React from "react";

type ProcessItemProps = {
  id: number;
  title: string;
  description: string;
};

export const ProcessItem = ({ id, title, description }: ProcessItemProps) => {
  return (
    <div className="w-full md:w-[300px] h-[160px] p-5 border border-[#E7DAED] rounded-lg">
      <h3 className="text-lg font-bold mb-3">
        <span className="inline-block mr-[10px] bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
          #{id}
        </span>
        <span>{title}</span>
      </h3>

      <p className="w-full h-[74px] text-sm text-[#718096] overflow-hidden">
        {truncate(description, 150)}
      </p>
    </div>
  );
};
