import React from "react";
import Image, { StaticImageData } from "next/image";
import person1 from "@/components/building-software/images/person_1.png";
import person2 from "@/components/building-software/images/person_2.png";
import person3 from "@/components/building-software/images/person_3.png";
import buildingSoftware1 from "@/components/building-software/images/building_software_1.png";
import buildingSoftware2 from "@/components/building-software/images/building_software_2.png";
import buildingSoftware3 from "@/components/building-software/images/building_software_3.png";

export type TBuildingSoftwareItem = {
  id: number;
  title: string;
  description: string;
  quote: string;
  person: {
    name: string;
    role: string;
    image: StaticImageData;
  };
  image: StaticImageData;
};

const buildingSoftwareItems: TBuildingSoftwareItem[] = [
  {
    id: 1,
    title: "Build the right team to scale",
    description:
      "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers). Our delivery model helps you cut costs and deliver within budget.",
    quote:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    person: {
      name: "Jeewa Markram",
      role: "CEO",
      image: person1,
    },
    image: buildingSoftware1,
  },
  {
    id: 2,
    title: "Accelerate your software development",
    description:
      "With years of experience, we streamline software development processes, ensuring faster delivery while maintaining quality. Our dedicated teams are equipped to handle complex requirements.",
    quote:
      "The team helped us save costs and delivered the project faster than we expected.",
    person: {
      name: "Aarav Singh",
      role: "CTO",
      image: person2,
    },
    image: buildingSoftware2,
  },
  {
    id: 3,
    title: "Ensure long-term scalability and success",
    description:
      "We focus on building software that scales with your business needs. Our approach ensures that your software remains robust, secure, and up-to-date as you grow.",
    quote:
      "Their support and expertise allowed us to scale our operations seamlessly without compromising on quality.",
    person: {
      name: "Emily Johnson",
      role: "Product Manager",
      image: person3,
    },
    image: buildingSoftware3,
  },
];

type BuildingSoftwareItemProps = {
  item: TBuildingSoftwareItem;
};

const BuildingSoftwareItem = ({ item }: BuildingSoftwareItemProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-8 mb-12 ${
        item.id % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 w-full md:w-auto">
        <div className="w-full md:w-[80%] mx-auto">
          <h3 className="text-[24px] md:text-[28px] font-semibold mb-[20px] md:mb-[30px]">
            {item.title}
          </h3>
          <p className="text-base md:text-lg text-[#2D3748] mb-4">
            {item.description}
          </p>
          <div className="flex mb-6">
            <div className="w-[5px] h-[69px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
            <p className="italic text-sm md:text-base ml-[15px] bg-gradient-to-r from-[#57007B] to-[#F76680] text-transparent bg-clip-text">
              {item.quote}
            </p>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <Image src={item.person.image} alt={item.person.name} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base text-[#1A202C]">{item.person.name}</h4>
              <p className="text-[13px] text-[#718096]">{item.person.role}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full md:w-auto flex justify-center">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full md:w-auto object-cover"
        />
      </div>
    </div>
  );
};

export const BuildingSoftware = () => {
  return (
    <section id="building-software" className="bg-white px-4 md:px-8 lg:px-24">
      <div className="my-6 md:my-8 lg:my-16">
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
        </div>
        <h2 className="flex flex-col text-center text-3xl lg:text-4xl text-[#1A202C]">
          Way of building <span className="font-bold">Great Software</span>
        </h2>
      </div>
      <div className="max-w-[1233px] mx-auto">
        {buildingSoftwareItems.map((item) => (
          <BuildingSoftwareItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
