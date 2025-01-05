import React from "react";
import Image from "next/image";
import heroImage from "./images/Hero_image.png";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-white px-4 md:px-8 lg:px-24 py-8 md:py-10 lg:py-12"
    >
      <div className="max-w-[1233px] mx-auto flex flex-col-reverse md:flex-row items-center gap-4">
        <div className="flex flex-1 items-center justify-start text-center md:text-left">
          <div className="max-w-lg">
            <h2 className="text-[36px] md:text-[45px] lg:text-[55px] font-medium text-[#1A202C] leading-snug mb-6">
              <span>
                Great&nbsp;
                <span className="font-bold bg-gradient-to-t from-[#0D1C9F] to-[#DE4396] bg-clip-text text-transparent">
                  Product
                </span>
                &nbsp;is&nbsp;
              </span>
              <strong className="font-bold">
                built by great&nbsp;
                <span className="bg-gradient-to-tr from-[#406AFF] to-[#F7666F] bg-clip-text text-transparent">
                  teams
                </span>
              </strong>
            </h2>
            <p className="text-base md:text-lg text-[#4A5568] mb-8">
              We help build and manage a team of world-class developers to bring
              your vision to life.
            </p>
            <button className="bg-[#3D63EA] text-sm md:text-base text-white px-6 md:px-10 py-3 md:py-4 rounded-lg hover:opacity-90 transition-opacity">
              Let’s get started!
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center md:justify-end">
          <Image
            src={heroImage}
            alt="hero"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};
