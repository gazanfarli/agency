import { StaticImageData } from "next/image";
import person from "./images/person.jpeg";

export type TFeedbackItem = {
  id: number;
  feedbackContent: string;
  stars: number;
  person: {
    fullName: string;
    specialty: string;
    image: StaticImageData;
  };
};

export const feedbackItems: TFeedbackItem[] = [
  {
    id: 1,
    feedbackContent:
      "The team exceeded our expectations. The project was delivered on time, and the quality of the work was outstanding. Communication was smooth throughout the process.",
    stars: 5,
    person: {
      fullName: "John Doe",
      specialty: "Software Engineer at TechCorp",
      image: person,
    },
  },
  {
    id: 2,
    feedbackContent:
      "Working with this team has been a great experience. They were responsive to our needs and provided innovative solutions that helped improve our business operations.",
    stars: 4,
    person: {
      fullName: "Jane Smith",
      specialty: "Product Manager at InnovateX",
      image: person,
    },
  },
  {
    id: 3,
    feedbackContent:
      "A highly professional team that delivered excellent results. I appreciated their attention to detail and commitment to ensuring customer satisfaction.",
    stars: 5,
    person: {
      fullName: "Michael Johnson",
      specialty: "CTO at Buildify",
      image: person,
    },
  },
  {
    id: 4,
    feedbackContent:
      "Their expertise and ability to understand our needs stood out. The end result surpassed our expectations, and the support during the project was excellent.",
    stars: 5,
    person: {
      fullName: "Emily Davis",
      specialty: "Marketing Manager at Creativo",
      image: person,
    },
  },
  {
    id: 5,
    feedbackContent:
      "They provided an excellent service, combining technical expertise with creativity. Our project was delivered within budget and ahead of schedule.",
    stars: 5,
    person: {
      fullName: "Robert Wilson",
      specialty: "Entrepreneur at StartupGen",
      image: person,
    },
  },
  {
    id: 6,
    feedbackContent:
      "The team showed great dedication and a deep understanding of our requirements. Their solutions were both innovative and effective.",
    stars: 4,
    person: {
      fullName: "Sophia Brown",
      specialty: "Operations Lead at ScaleUp",
      image: person,
    },
  },
  {
    id: 7,
    feedbackContent:
      "Outstanding work! The team was always available to answer our queries and went above and beyond to ensure the project's success.",
    stars: 5,
    person: {
      fullName: "James Anderson",
      specialty: "CEO at NextGenTech",
      image: person,
    },
  },
];
