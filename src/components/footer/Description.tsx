import { footerData } from "@/data";
import Image from "next/image";
import React from "react";

export const Description = () => {
  return (
    <section className="flex flex-col md:w-1/3 lg:w-1/4">
      <div className="mb-4">
        <Image
          width={123}
          height={41}
          src={footerData.description.logo}
          alt="logo"
        />
      </div>
      <p className="text-sm text-gray-600 md:w-[80%] lg:w-[90%]">
        {footerData.description.text}
      </p>
    </section>
  );
};
