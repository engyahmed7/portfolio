import { Monitor, Server, Database, LucideIcon } from 'lucide-react';

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Monitor,
    title: "Frontend Development",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "VueJS",
      "Bootstrap",
      "Tailwind",
      "jQuery",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Laravel",
      "PHP",
      "WordPress",
      "REST APIs",
      "Laravel Reverb",
      "Laravel Horizon",
      "Messaging Queue",
      "WebSocket",
      "Firebase",
    ],
  },
  {
    icon: Database,
    title: "Databases & Tools",
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Git/Github",
      "Docker",
      "Jira",
      "Postman",
    ],
  },
];