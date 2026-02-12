export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  type: string;
  skills: string[];
  color: string;
  notes?: string;
}

export const education: Education[] = [
  {
    institution: "Information Technology Institute (ITI)",
    degree: "Open Source Application Development Track - 9 Month Program",
    period: "Oct. 2023 – Jun. 2024",
    location: "Alexandria, Egypt",
    type: "Professional Development",
    skills: [
      "Laravel",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
      "Git",
      "Agile",
      "Unit Testing",
      "Docker",
      "OOP",
      "Algorithms",
      "Data Structures",
      "C/C++",
      "MySQL",
      "PostgreSQL",
      "JWT",
      "OAuth",
      "CI/CD",
      "Jest",
      "Bootstrap",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    institution: "Alexandria University – Faculty of Science",
    degree: "Bachelor of Software Engineering, SIM Department",
    period: "Sept. 2019 – Jul. 2023",
    location: "Alexandria, Egypt",
    type: "Bachelor's Degree",
    notes:
      "Graduation Project: Wasally Shipping System – CGPA: 3.9, Ranking 8th",
    skills: [
      "Software Engineering",
      "Database Design",
      "System Analysis",
      "Project Management",
      "Algorithms",
      "Data Structures",
      "OOP",
      "UML",
      "C++",
      "Java",
      "Python",
      "Web Development",
      "Teamwork",
      "Communication",
      "Research",
      "Presentation Skills",
    ],
    color: "from-purple-500 to-pink-500",
  },
];