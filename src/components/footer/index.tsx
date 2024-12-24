import React from "react";
import { CopyRight } from "./CopyRight";
import { Description } from "./Description";
import { Links } from "./Links";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center flex-col md:flex-row md:justify-between md:items-center md:px-20 py-10">
        <Description />
        <Links />
        <Contact />
      </div>
      <CopyRight />
    </footer>
  );
};
