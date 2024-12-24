import React from "react";
import Image from "next/image";
import Logo from "@/assets/woolmarkimagelogo-1024x576.png";
import { Button } from "../ui/button";
import { navbarItems } from "@/data";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white text-[#4A5568] px-[25px] py-[10px]">
      <Image width={100} height={30} src={Logo} alt="logo" />

      <ul className="flex space-x-6">
        {navbarItems.map((item) => (
          <li key={item.title}>
            <a href={item.href} className="hover:text-gray-400 transition">
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <Button>Contact Us</Button>
    </nav>
  );
};
