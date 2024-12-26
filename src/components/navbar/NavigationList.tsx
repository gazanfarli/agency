"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BiMenu, BiX } from "react-icons/bi";
import { navbarItems } from "@/data";
import { Drawer } from "vaul";

export const NavigationList = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const renderNavItems = () => (
    <ul className="flex flex-col md:flex-row md:gap-6">
      {navbarItems.map((item) => (
        <li key={item.title} className="p-4 md:p-0 border-b md:border-none">
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

  return (
    <div className="flex flex-col md:flex-row md:items-center space-x-4">
      <div className="hidden md:flex">
        {renderNavItems()}
      </div>

      <Drawer.Root
        direction="right"
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
            <div>
              {renderNavItems()}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
