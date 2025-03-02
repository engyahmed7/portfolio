import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Linkedin, Github } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const education = [
    {
      institution: "Information Technology Institute (ITI)",
      degree: "Open Source Application Development Track - 9 Month Program",
      period: "Oct. 2023 – Jun. 2024",
      location: "Alexandria, Egypt",
    },
    {
      institution: "Alexandria University – Faculty of Science",
      degree: "Bachelor of Software Engineering, SIM Department",
      period: "Sept. 2019 – Jul. 2023",
      location: "Alexandria, Egypt",
      notes:
        "Graduation Project: Wasally Shipping System – CGPA: 3.9, Ranking 8th",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 px-4 ${
        darkMode ? "bg-gray-900/30" : "bg-gray-100/70"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About" highlight="Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-indigo-400" />
                Professional Profile
              </h3>
              <div
                className={`absolute -left-2 top-0 bottom-0 w-1 rounded-full ${
                  darkMode ? "bg-indigo-500/30" : "bg-indigo-300"
                }`}
              />
            </div>

            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Full-stack developer with a strong focus on both frontend and
              backend technologies, passionate about creating responsive,
              user-friendly web applications with clean, maintainable code.
              Experienced in developing e-commerce solutions, deploying
              applications, and integrating third-party services.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              I specialize in building modern web applications using React,
              Angular, Node.js and Laravel, with a keen eye for detail and a
              commitment to creating exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Name", value: "Engy Ahmed Abdelaziz" },
                { label: "Location", value: "Alexandria, Egypt" },
                { label: "Experience", value: "3+ Years" },
                { label: "Availability", value: "Full-time, Freelance" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-lg ${
                    darkMode ? "bg-gray-800/50" : "bg-white/80"
                  } border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div
                    className={`font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                  Contact Information
                </h3>
                <div
                  className={`absolute -left-2 top-0 bottom-0 w-1 rounded-full ${
                    darkMode ? "bg-indigo-500/30" : "bg-indigo-300"
                  }`}
                />
              </div>

              <ul className="space-y-4">
                {[
                  {
                    icon: Mail,
                    value: "engya306@gmail.com",
                    href: "mailto:engya306@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    value: "linkedin/engyahmed",
                    href: "https://www.linkedin.com/in/engy-ahmed-4109751b7/",
                  },
                  {
                    icon: Github,
                    value: "github/engyahmed",
                    href: "https://github.com/engyahmed7",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/10">
                        <Icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        {item.value}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-indigo-400" />
                Education
              </h3>
              <div
                className={`absolute -left-2 top-0 bottom-0 w-1 rounded-full ${
                  darkMode ? "bg-indigo-500/30" : "bg-indigo-300"
                }`}
              />
            </div>

            <div className="space-y-8 relative">
              <div
                className={`absolute left-4 top-0 bottom-0 w-1 ${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10 bg-gradient-to-r from-indigo-500 to-purple-500">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-xl ${
                      darkMode ? "bg-gray-800/60" : "bg-white"
                    } border ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    } shadow-lg`}
                  >
                    <h4 className="text-lg font-semibold">
                      {edu.institution}
                    </h4>
                    <p className="text-indigo-400">{edu.degree}</p>
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.notes && (
                      <p
                        className={`mt-4 text-sm px-4 py-2 border-l-2 border-indigo-400 ${
                          darkMode
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        } rounded`}
                      >
                        {edu.notes}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;