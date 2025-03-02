import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
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
      ],
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: [
        "MongoDB",
        "MySQL",
        "Git/Github",
        "Docker",
        "Jira",
        "Postman",
        "Redis",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Technical" highlight="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800/60" : "bg-white"
                } border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } shadow-lg`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span
                          className={
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          {skill}
                        </span>
                        <span>
                          <Star className="w-4 h-4 text-yellow-400 inline-block" />
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full ${
                          darkMode ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
                          style={{ width: `${100}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;