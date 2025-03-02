export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Objects",
    period: "Jul. 2024 - Present",
    description:
      "Working on e-commerce projects using Laravel and WordPress, developing complete systems with intuitive dashboards and payment gateway integrations.",
    achievements: [
      "Integrated AI using PoseNet for body measurements in e-commerce",
      "Developed a complete e-commerce system using Laravel Filament",
      "Designed numerous WordPress plugins enhancing WooCommerce",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company: "Mostaql Platform",
    period: "May 2024",
    description:
      "Enhanced Sala Platform by refining CSS and JavaScript for improved styling and performance.",
    achievements: [],
  },
  {
    title: "Freelance Full-stack Developer",
    company: "Mostaql Platform",
    period: "May 2024 - Jun. 2024",
    description:
      "Integrated authentication systems and developed admin dashboards with React and Laravel.",
    achievements: [
      "Integrated Google/Facebook authentication",
      "Developed admin dashboard using React and Laravel",
      "Implemented authorization system to secure data",
    ],
  },
];