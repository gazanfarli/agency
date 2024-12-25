import React from "react";
import { CopyRight } from "./CopyRight";
import { Description } from "./Description";
import { Links } from "./Links";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <footer>
      <div className="px-4 md:px-8 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between py-10 gap-8 md:gap-12 lg:gap-20">
          <Description />
          <Links />
          <Contact />
        </div>
      </div>
      <hr className="border-t border-gray-200" />
      <CopyRight />
    </footer>
  );
};
