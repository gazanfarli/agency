import React from "react";
import { Navlogo } from "./Navlogo";
import { ContactButton } from "./ContactButton";
import { NavigationList } from "./NavigationList";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white text-[#4A5568] px-[25px] py-[10px]">
      <Navlogo />
      <NavigationList />
      <div className="hidden md:flex items-center space-x-4">
        <ContactButton />
      </div>
    </nav>
  );
};
