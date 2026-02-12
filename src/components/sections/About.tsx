import React, { useState } from "react";
import pdf from "../../assets/Engy_Ahmed_Abdelaziz.pdf";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Award,
  Download,
  ExternalLink,
  Code,
  Sparkles,
  GraduationCap,
  User,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { education } from "../../data/education";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "education">(
    "profile"
  );

  const personalInfo = [
    {
      label: "Full Name",
      value: "Engy Ahmed Abdelaziz",
      icon: User,
      color: "text-blue-400",
    },
    {
      label: "Location",
      value: "Alexandria, Egypt",
      icon: MapPin,
      color: "text-green-400",
    },
    {
      label: "Experience",
      value: "2+ Years",
      icon: Code,
      color: "text-purple-400",
    },
    {
      label: "Availability",
      value: "Full-time, Freelance",
      icon: Calendar,
      color: "text-orange-400",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "engya306@gmail.com",
      href: "mailto:engya306@gmail.com",
      color: "from-red-400 to-pink-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin/engyahmed",
      href: "https://www.linkedin.com/in/engy-ahmed-4109751b7/",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github/engyahmed",
      href: "https://github.com/engyahmed7",
      color: "from-gray-400 to-gray-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className={`py-20 px-4 relative overflow-hidden ${
        darkMode ? "bg-gray-900/30" : "bg-gray-100/70"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 ${
            darkMode
              ? "bg-gradient-to-br from-indigo-400 to-purple-600"
              : "bg-gradient-to-br from-indigo-300 to-purple-400"
          } blur-3xl`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 ${
            darkMode
              ? "bg-gradient-to-br from-pink-400 to-red-600"
              : "bg-gradient-to-br from-pink-300 to-red-400"
          } blur-3xl`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader title="About" highlight="Me" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <div
            className={`flex p-1 rounded-xl ${
              darkMode ? "bg-gray-800/60" : "bg-white/60"
            } backdrop-blur-sm border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {[
              { key: "profile", label: "Profile", icon: User },
              { key: "education", label: "Education", icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() =>
                    setActiveTab(tab.key as "profile" | "education")
                  }
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                      : darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16"
            >
              <motion.div className="space-y-8">
                <div className="relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20`}
                  />
                  <div
                    className={`relative p-8 rounded-2xl ${
                      darkMode ? "bg-gray-800/80" : "bg-white/80"
                    } backdrop-blur-sm border ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold ml-4">
                        Professional Profile
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <p
                        className={`text-lg leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Full-stack developer with a strong focus on both
                        frontend and backend technologies, passionate about
                        creating responsive, user-friendly web applications with
                        clean, maintainable code.
                      </p>
                      <p
                        className={`leading-relaxed ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Experienced in developing e-commerce solutions,
                        deploying applications, and integrating third-party
                        services. I specialize in building modern web
                        applications using React, Angular, Node.js and Laravel.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        "React.js",
                        "Angular",
                        "Node.js",
                        "Laravel",
                        "WordPress",
                        "MongoDB",
                        "MySQL",
                        "PostgreSQL",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            darkMode
                              ? "bg-gray-700 text-indigo-400"
                              : "bg-indigo-100 text-indigo-700"
                          } border ${
                            darkMode
                              ? "border-indigo-500/20"
                              : "border-indigo-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {personalInfo.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className={`relative p-6 rounded-xl ${
                          darkMode ? "bg-gray-800/60" : "bg-white/80"
                        } backdrop-blur-sm border ${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        } transition-all duration-300 cursor-default`}
                      >
                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 ${
                            hoveredCard === i ? "opacity-100" : ""
                          }`}
                        />
                        <div className="relative z-10">
                          <div className="flex items-center mb-3">
                            <Icon className={`w-5 h-5 ${item.color}`} />
                            <span className="text-sm text-gray-500 ml-2">
                              {item.label}
                            </span>
                          </div>
                          <div
                            className={`font-semibold ${
                              darkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                          >
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-8">
                <div className="relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-20`}
                  />
                  <div
                    className={`relative p-8 rounded-2xl ${
                      darkMode ? "bg-gray-800/80" : "bg-white/80"
                    } backdrop-blur-sm border ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold ml-4">
                          Get In Touch
                        </h3>
                      </div>
                      <motion.a
                        href={pdf}
                        download="Engy_Ahmed_Abdelaziz.pdf"
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          darkMode
                            ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        <span>Resume</span>
                      </motion.a>
                    </div>
                    {/* get in touch */}
                    <div className="space-y-4">
                      {contactInfo.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 8 }}
                            className={`flex items-center p-4 rounded-xl ${
                              darkMode
                                ? "bg-gray-700/50 hover:bg-gray-700"
                                : "bg-gray-50 hover:bg-gray-100"
                            } transition-all duration-300 group`}
                          >
                            <div
                              className={`p-3 rounded-lg bg-gradient-to-r ${item.color} mr-4`}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-gray-500">
                                {item.label}
                              </div>
                              <div
                                className={`font-medium ${
                                  darkMode ? "text-gray-200" : "text-gray-800"
                                }`}
                              >
                                {item.value}
                              </div>
                            </div>
                            <ExternalLink
                              className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="mt-16"
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div
                    className={`absolute left-8 top-0 bottom-0 w-1 ${
                      darkMode ? "bg-gray-800" : "bg-gray-200"
                    }`}
                  />

                  <div className="space-y-12">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative pl-20"
                      >
                        <div
                          className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center z-10 bg-gradient-to-r ${edu.color} shadow-xl`}
                        >
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>

                        <div
                          className={`relative p-8 rounded-2xl ${
                            darkMode ? "bg-gray-800/60" : "bg-white"
                          } border ${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } shadow-xl backdrop-blur-sm`}
                        >
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-5`}
                          />

                          <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <span
                                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                                    darkMode
                                      ? "bg-gray-700 text-gray-300"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  {edu.type}
                                </span>
                                <h4 className="text-xl font-bold mb-1">
                                  {edu.institution}
                                </h4>
                                <p className="text-lg text-indigo-400 font-medium">
                                  {edu.degree}
                                </p>
                              </div>
                              <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {edu.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {edu.location}
                              </div>
                            </div>

                            {edu.notes && (
                              <div
                                className={`p-4 mb-6 border-l-4 border-indigo-400 ${
                                  darkMode
                                    ? "bg-gray-800/80 text-gray-300"
                                    : "bg-indigo-50 text-gray-700"
                                } rounded-r-lg`}
                              >
                                <p className="font-medium">{edu.notes}</p>
                              </div>
                            )}

                            <div>
                              <h5 className="font-semibold mb-3">
                                Key Skills & Technologies
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {edu.skills.map((skill, i) => (
                                  <span
                                    key={i}
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                      darkMode
                                        ? "bg-gray-700 text-indigo-400"
                                        : "bg-indigo-100 text-indigo-700"
                                    } border ${
                                      darkMode
                                        ? "border-indigo-500/20"
                                        : "border-indigo-200"
                                    }`}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
