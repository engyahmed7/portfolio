import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experience = [
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

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Work" highlight="Experience" />

        <div className="relative mt-16 pl-6 md:pl-0">
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } md:left-1/2 md:-ml-0.5`}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`mb-12 relative ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto md:pl-0"
                  : "md:pl-12 md:text-left md:mr-auto md:pr-0"
              } md:w-1/2`}
            >
              <div className="absolute left-0 md:left-auto md:right-0 w-8 h-8 -ml-10 md:ml-0 md:-mr-4 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-indigo-500 to-purple-500">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800/60" : "bg-white"
                } border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } shadow-lg group hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1`}
              >
                <span className="text-sm px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 inline-block mb-2">
                  {exp.period}
                </span>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <h4
                  className={`text-lg font-medium ${
                    darkMode ? "text-purple-400" : "text-purple-500"
                  } mb-3`}
                >
                  {exp.company}
                </h4>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.description}
                </p>

                {exp.achievements.length > 0 && (
                  <div
                    className={`mt-4 p-3 rounded-lg ${
                      darkMode ? "bg-gray-900/50" : "bg-gray-100"
                    }`}
                  >
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul
                      className={`list-disc pl-5 space-y-1 text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;