import php from "./images/php.png";
import mysql from "./images/mysql.png";
import python from "./images/python.png";
import nodejs from "./images/nodejs.png";
import golang from "./images/golang.png";
import mongodb from "./images/mongodb.png";
import rubyonrails from "./images/rubyonrails.png";
import { StaticImageData } from "next/image";

export type TTechStackItem = {
  id: number;
  name: string;
  logo: StaticImageData;
};

export const techStackItems: TTechStackItem[] = [
  { id: 1, name: "Node JS", logo: nodejs },
  { id: 2, name: "Python", logo: python },
  { id: 3, name: "MySQL", logo: mysql },
  { id: 4, name: "PHP", logo: php },
  { id: 5, name: "Golang", logo: golang },
  { id: 6, name: "MongoDB", logo: mongodb },
  { id: 7, name: "Ruby on Rails", logo: rubyonrails },
];
