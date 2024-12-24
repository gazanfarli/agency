import React from "react";
import Image from "next/image";
import Logo from "@/assets/woolmarkimagelogo-1024x576.png";
import { Button } from "../ui/button";

const navbarItems = [
  {
    title: "About us",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Case Studies",
    href: "#case-studies",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "How it Works",
    href: "#how-it-works",
  },
  {
    title: "Hire",
    href: "#hire",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <Image width={100} height={30} src={Logo} alt="logo" />

      <ul className="flex space-x-6">
        {navbarItems.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className="text-white hover:text-gray-400 transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <Button>Contact Us</Button>
    </nav>
  );
};
