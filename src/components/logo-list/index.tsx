import React from "react";
import { logoList } from "@/data";

export const LogoList = () => {
  return (
    <section id="logo-list" className="py-8 md:py-14 bg-[#F7F7FA]">
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll hover:paused gap-8">
          {[...logoList, ...logoList].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <logo.image />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
