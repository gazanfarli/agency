import logo from "@/assets/logo.png";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

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
