import { StaticImageData } from "next/image";
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

export const buildingSoftwareItems: TBuildingSoftwareItem[] = [
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
