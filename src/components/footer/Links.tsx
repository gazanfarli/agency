import { footerData } from "@/data";
import Link from "next/link";
import React from "react";

export const Links = () => {
  return (
    <section className="md:w-1/4 lg:w-1/5">
      <h3 className="mb-5 font-bold text-lg">Links</h3>
      <ul className="flex flex-col gap-2">
        {footerData.links.map((link) => (
          <li key={link.title}>
            <Link
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              href={link.href}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
