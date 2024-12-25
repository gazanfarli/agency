import { footerData } from "@/data";
import React from "react";

export const Contact = () => {
  return (
    <section className="md:w-1/3 lg:w-1/4">
      <h3 className="mb-5 font-bold text-lg">Contact Us</h3>
      <p className="mb-4 text-sm text-gray-600">{footerData.contact.description}</p>
      <p className="mb-6 font-semibold text-gray-800">
        Phone: {footerData.contact.phoneNumber}
      </p>
      <div>
        <ul className="flex space-x-4">
          {footerData.contact.socialLinks.map((social, index) => (
            <li key={index}>
              <a
                className="w-[34px] h-[34px] p-[6px] bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.title}
              >
                <social.icon size={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
