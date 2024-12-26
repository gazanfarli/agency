'use client';

import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ColorMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
      aria-label="Toggle Color Mode"
    >
      {darkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  );
};
