"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiMenu, BiX, BiSun, BiMoon } from "react-icons/bi";
import { navbarItems } from "@/data";
import { Drawer } from "vaul";

export const NavigationList = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("eng");

  const renderNavItems = () => (
    <ul className="flex flex-col md:flex-row gap-6">
      {navbarItems.map((item) => (
        <li key={item.title} className="py-2 md:py-0">
          <Link
            href={item.href}
            className="block text-gray-700 hover:text-gray-400 transition"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderUtilities = () => (
    <div className="flex flex-col md:flex-row md:space-x-4 items-start md:items-center mt-4 md:mt-0">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm md:w-auto"
      >
        <option value="az">AZ</option>
        <option value="eng">ENG</option>
        <option value="ru">RU</option>
      </select>

      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        aria-label="Toggle Color Mode"
      >
        {darkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row md:items-center space-x-4">
      <div className="hidden md:flex">{renderNavItems()}</div>

      <Drawer.Root
        direction="left"
        dismissible={true}
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      >
        <Drawer.Trigger>
          <div
            className="md:hidden text-gray-700 hover:text-gray-400 transition"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Menu"
          >
            <BiMenu size={30} />
          </div>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Drawer.Content className="fixed inset-0 bg-white z-40 flex flex-col">
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <Drawer.Title className="text-lg font-bold">Menu</Drawer.Title>
              <button
                className="text-gray-700 hover:text-gray-400 transition"
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close Menu"
              >
                <BiX size={30} />
              </button>
            </div>
            <div className="p-4">{renderNavItems()}</div>
            <div className="p-4">{renderUtilities()}</div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
