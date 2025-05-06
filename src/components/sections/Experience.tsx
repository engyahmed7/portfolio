import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  Award,
  Calendar,
  Building,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experience = [
    {
      title: "Software Engineer",
      company: "Objects",
      location: "San Francisco, CA",
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
        "WordPress",
        "React",
        "AI Integration",
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
      achievements: [],
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
      skills: ["Flutter", "Node.js", "Mobile Development", "Admin Dashboard"],
      color: "from-rose-500 to-pink-400",
      icon: Briefcase,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Professional" highlight="Experience" />

        <div className="relative mt-20 pl-6 md:pl-0">
          <div
            className={`absolute left-0 top-0 bottom-0 w-0.5 ${
              darkMode
                ? "bg-gradient-to-b from-gray-800 via-indigo-900/30 to-gray-800"
                : "bg-gradient-to-b from-gray-200 via-indigo-300/30 to-gray-200"
            } md:left-1/2 md:-ml-0.5`}
          />

          {experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            const IconComponent = exp.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`mb-16 relative ${
                  index % 2 === 0
                    ? "md:pr-16 md:text-right md:ml-auto md:pl-0"
                    : "md:pl-16 md:text-left md:mr-auto md:pr-0"
                } md:w-1/2`}
              >
                <div
                  className={`absolute left-0 md:left-auto ${
                    index % 2 === 0 ? "md:right-1" : "md:left-1"
                  } 
                    w-10 h-10 -ml-11 md:ml-0 ${
                      index % 2 === 0 ? "md:-mr-6" : "md:-ml-6"
                    } 
                    rounded-full flex items-center justify-center z-10 
                    bg-gradient-to-r ${exp.color} shadow-lg`}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </div>

                <div
                  className={`p-6 rounded-xl ${
                    darkMode ? "bg-gray-800/70 backdrop-blur-sm" : "bg-white"
                  } border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } shadow-xl transition-shadow duration-300 
                  ${
                    darkMode
                      ? "hover:shadow-indigo-500/20"
                      : "hover:shadow-indigo-300/40"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar
                      className={`w-4 h-4 ${
                        darkMode ? "text-indigo-300" : "text-indigo-500"
                      }`}
                    />
                    <span
                      className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                      border border-indigo-500/20 text-indigo-400 font-medium"
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3
                      className={`text-2xl font-bold ${
                        darkMode ? "text-white" : "text-gray-800"
                      } mb-1`}
                    >
                      {exp.title}
                    </h3>
                    <div className="flex items-center flex-wrap gap-2">
                      <h4
                        className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </h4>
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        · {exp.location}
                      </span>
                    </div>
                  </div>

                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } leading-relaxed`}
                  >
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-700 text-gray-300 border border-gray-600"
                            : "bg-gray-100 text-gray-600 border border-gray-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {exp.achievements.length > 0 && (
                    <div>
                      <button
                        onClick={() => toggleExpand(index)}
                        className={`flex items-center gap-1 font-medium text-sm mb-3 
                          ${
                            darkMode
                              ? "text-indigo-300 hover:text-indigo-200"
                              : "text-indigo-600 hover:text-indigo-800"
                          }
                          transition-colors duration-200`}
                      >
                        <Award className="w-4 h-4" />
                        <span>Key Achievements</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`p-4 rounded-lg ${
                                darkMode ? "bg-gray-900/80" : "bg-gray-50"
                              } border ${
                                darkMode ? "border-gray-700" : "border-gray-200"
                              }`}
                            >
                              <ul
                                className={`space-y-2 text-sm ${
                                  darkMode ? "text-gray-300" : "text-gray-600"
                                }`}
                              >
                                {exp.achievements.map((ach, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <div
                                      className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`}
                                    />
                                    <span>{ach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
