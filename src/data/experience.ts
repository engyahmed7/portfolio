import { Briefcase, Building, LucideIcon } from "lucide-react";

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  color: string;
  icon: LucideIcon;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Objects",
    location: "Alexandria, Egypt",
    period: "Jul. 2024 - Present",
    description:
      "Working on e-commerce projects using Laravel and WordPress, developing complete systems with intuitive dashboards and payment gateway integrations.",
    achievements: [
      "Integrated AI using PoseNet for body measurements in e-commerce",
      "Developed a complete e-commerce system using Laravel Filament",
      "Designed numerous WordPress plugins enhancing WooCommerce",
    ],
    skills: [
      "Laravel",
      "PHP",
      "AI Integration",
      "Filament",
      "PoseNet",
      "MySQL",
      "Firebase",
      "Rest APIs",
      "jQuery",
      "Tensorflow.js",
      "JavaScript",
      "React",
      "POS",
      "WordPress",
      "WooCommerce",
    ],
    color: "from-blue-500 to-cyan-400",
    icon: Briefcase,
  },
  {
    title: "Freelance Frontend Developer",
    company: "Mostaql Platform",
    location: "Remote",
    period: "May 2024",
    description:
      "Enhanced Sala Platform by refining CSS and JavaScript for improved styling and performance.",
    achievements: [
      "Improved CSS styling for better user experience",
      "Optimized JavaScript for enhanced performance",
    ],
    skills: ["CSS", "JavaScript", "Frontend Development"],
    color: "from-emerald-500 to-teal-400",
    icon: Building,
  },
  {
    title: "Freelance Full-stack Developer",
    company: "Mostaql Platform",
    location: "Remote",
    period: "May 2024 - Jun. 2024",
    description:
      "Integrated authentication systems and developed admin dashboards with React and Laravel.",
    achievements: [
      "Integrated Google/Facebook authentication",
      "Developed admin dashboard using React and Laravel",
      "Implemented authorization system to secure data",
    ],
    skills: ["React", "Laravel", "Authentication", "Authorization"],
    color: "from-purple-500 to-indigo-400",
    icon: Briefcase,
  },
  {
    title: "Flutter Developer",
    company: "Freelance",
    location: "Remote",
    period: "Sep. 2024 - Apr. 2025",
    description:
      "Developed an e-commerce application for dental improvement, featuring mobile screens for users and an admin dashboard, all integrated with backend Node.js APIs.",
    achievements: [
      "Created user-friendly mobile screens for seamless shopping experience",
      "Developed an admin dashboard for managing products and orders",
      "Integrated backend Node.js APIs for efficient data handling",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "Node.js",
      "Mobile Development",
      "Admin Dashboard",
    ],
    color: "from-rose-500 to-pink-400",
    icon: Briefcase,
  },
];