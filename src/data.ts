import logo from "@/assets/logo.png";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { Logo1 } from "@/assets/logos/Logo1";
import { Logo2 } from "@/assets/logos/Logo2";
import { Logo3 } from "@/assets/logos/Logo3";
import { Logo4 } from "@/assets/logos/Logo4";
import { Logo5 } from "@/assets/logos/Logo5";
import { Logo6 } from "@/assets/logos/Logo6";
import { Logo7 } from "@/assets/logos/Logo7";
import RocketIcon from "@/components/approach/images/Rocket_perspective_matte.png";
import CodeIcon from "@/components/approach/images/Code_perspective_matte.png";
import HeartIcon from "@/components/approach/images/Heart_rate_perspective_matte.png";
import ShieldIcon from "@/components/approach/images/Shield_perspective_matte.png";
import SuccessIcon from "@/components/approach/images/Success_perspective_matte.png";
import PadlockIcon from "@/components/approach/images/Padlock_perspective_matte.png";
import { StaticImageData } from "next/image";

export type TApproachItem = {
  icon: StaticImageData;
  title: string;
  description: string;
  gradient: string;
};

export const navbarItems = [
  {
    title: "About us",
    href: "#about-us",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Case Studies",
    href: "#case-studies",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "How it Works",
    href: "#how-it-works",
  },
  {
    title: "Hire",
    href: "#hire",
  },
];

export const footerData = {
  description: {
    logo,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque odio illo impedit maiores quaerat aspernatur.",
  },
  contact: {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    phoneNumber: "+91 1234567890",
    socialLinks: [
      {
        title: "Facebook",
        icon: TiSocialFacebook,
        href: "#facebook",
      },
      {
        title: "Twitter",
        icon: TiSocialTwitter,
        href: "#twitter",
      },
      {
        title: "LinkedIn",
        icon: TiSocialLinkedin,
        href: "#linkedin",
      },
      {
        title: "Instagram",
        icon: TiSocialInstagram,
        href: "#instagram",
      },
    ],
  },
  links: [
    {
      title: "About Us",
      href: "#about-us",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Case Studies",
      href: "#case-studies",
    },
    {
      title: "How it Works",
      href: "#how-it-works",
    },
    {
      title: "Blog",
      href: "#blog",
    },
    {
      title: "Careers",
      href: "#careers",
    },
    {
      title: "Areas We Serve",
      href: "#areas-we-serve",
    },
  ],
};

export const logoList = [
  { id: 1, name: "Logo 1", image: Logo1 },
  { id: 2, name: "Logo 2", image: Logo2 },
  { id: 3, name: "Logo 3", image: Logo3 },
  { id: 4, name: "Logo 4", image: Logo4 },
  { id: 5, name: "Logo 5", image: Logo5 },
  { id: 6, name: "Logo 6", image: Logo6 },
  { id: 7, name: "Logo 7", image: Logo7 },
];

export const approachItems: TApproachItem[] = [
  {
    icon: RocketIcon,
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    gradient: "bg-gradient-to-r from-[#29272E] to-[#27272E]",
  },
  {
    icon: CodeIcon,
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    gradient: "bg-gradient-to-r from-[#68DBF2] to-[#509CF5]",
  },
  {
    icon: HeartIcon,
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    gradient: "bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A]",
  },
  {
    icon: ShieldIcon,
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    gradient: "bg-gradient-to-r from-[#67E9F1] to-[#24E795]",
  },
  {
    icon: SuccessIcon,
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    gradient: "bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]",
  },
  {
    icon: PadlockIcon,
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    gradient: "bg-gradient-to-r from-[#F76680] to-[#57007B]",
  },
];
