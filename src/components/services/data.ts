import { IconType } from "react-icons";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaCloud, FaTools } from "react-icons/fa";
import { MdAnalytics, MdSecurity, MdOutlineStore } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";

export type TServiceItem = {
  id: number;
  icon: IconType;
  title: string;
  description: string;
};

export const serviceItems: TServiceItem[] = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "Build modern, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "Create user-friendly and feature-rich mobile applications for iOS and Android platforms.",
  },
  {
    id: 3,
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Design stunning interfaces and user experiences that captivate and engage your audience.",
  },
  {
    id: 4,
    icon: FaCloud,
    title: "Cloud Solutions",
    description:
      "Leverage scalable and secure cloud infrastructure to optimize your business operations.",
  },
  {
    id: 5,
    icon: FaTools,
    title: "DevOps Services",
    description:
      "Automate and streamline your development and deployment processes with DevOps expertise.",
  },
  {
    id: 6,
    icon: MdAnalytics,
    title: "Data Analytics",
    description:
      "Analyze and visualize data to gain actionable insights and make informed decisions.",
  },
  {
    id: 7,
    icon: MdOutlineStore,
    title: "E-commerce Solutions",
    description:
      "Develop powerful e-commerce platforms with seamless payment integrations and user-friendly designs.",
  },
  {
    id: 8,
    icon: MdSecurity,
    title: "Cybersecurity",
    description:
      "Ensure the safety of your digital assets with advanced security solutions and threat detection.",
  },
  {
    id: 9,
    icon: AiOutlineRobot,
    title: "Artificial Intelligence",
    description:
      "Implement AI-driven solutions to automate tasks, improve efficiency, and drive innovation.",
  },
  {
    id: 10,
    icon: SiHiveBlockchain,
    title: "Blockchain Development",
    description:
      "Build secure, transparent, and decentralized blockchain solutions for various industries.",
  },
];
