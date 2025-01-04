import { StaticImageData } from "next/image";
import caseStudyImage1 from "./images/Case_study_1.png";
import caseStudyImage2 from "./images/Case_study_2.png";
import caseStudyImage3 from "./images/Case_study_3.png";

export type TCaseStudyItem = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

export const caseStudyItems: TCaseStudyItem[] = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description:
      "We helped a major retail brand revamp their online store, improving user experience and driving conversions through optimized design and seamless checkout flow.",
    image: caseStudyImage1,
  },
  {
    id: 2,
    title: "Mobile App for Food Delivery",
    description:
      "A food delivery app built to simplify ordering and enhance user experience with advanced features like live tracking and quick payments.",
    image: caseStudyImage2,
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description:
      "We developed a modern platform for real estate agents to manage listings and connect with clients, boosting their sales and marketing efforts.",
    image: caseStudyImage3,
  },
];
