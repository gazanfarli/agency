import React from "react";
import { Navlogo } from "./Navlogo";
import { ContactButton } from "./ContactButton";
import { NavigationList } from "./NavigationList";

export const Navbar = () => {
  return (
    <nav className="px-4 md:px-8 lg:px-24 bg-white text-[#4A5568]">
      <div className="max-w-[1233px] mx-auto  flex justify-between items-center py-[10px]">

      <Navlogo />
      <NavigationList />
      <div className="hidden md:flex items-center">
        <ContactButton />
      </div>
      </div>
    </nav>
  );
};
