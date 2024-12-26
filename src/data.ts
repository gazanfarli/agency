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
