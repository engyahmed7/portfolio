import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Server,
  Database,
  Monitor,
  PenTool,
  Layers,
  Cpu,
  Terminal,
  Star,
  Moon,
  Sun,
  Download,
  Globe,
  Briefcase,
  BookOpen,
} from "lucide-react";

import pdf from "./assets/Engy_Ahmed_Abdelaziz.pdf";
import food_tracking from "./assets/food_tracking.png";
import vacation from "./assets/vacation.png";
import sizely from "./assets/sizely.png";
import webuild from "./assets/webuild.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Sizely AI Project",
      github: "https://github.com/engyahmed7/sizely-app",
      description:
        "Sizely App is a web-based application designed for real-time body pose detection via webcam. Utilizing the powerful TensorFlow.js and PoseNet models, it provides accurate body pose analysis. The application is built on Laravel for the backend, ensuring a robust and efficient user experience for pose recognition and analysis.",
      tags: [
        "Laravel",
        "PHP",
        "MySQL",
        "Javascript",
        "Tensorflow",
        "PoseNet",
        "Webcam",
        "CSS",
      ],
      demo: "http://sizely-pose-detection.wuaze.com/",
      image:  sizely ,
    },
    {
      title: "Vacation Tracker",
      github: "https://github.com/engyahmed7/Vacation_Tracker",
      description:
        "A comprehensive vacation management system with dual-approval workflow and Mattermost integration. The system supports three primary roles: Admin, HR, and Supervisor, ensuring a structured approval workflow. The application integrates with Mattermost chat to provide real-time notifications regarding vacation requests and approvals.",
      tags: ["Laravel", "PHP", "Filament", "MySQL", "Eloquent", "Bootstrap"],
      demo: "https://vacation-tracker.free.nf/",
      image: vacation ,
    },
    {
      title: "WeBuild Project",
      github: "https://github.com/engyahmed7/node-deployer",
      description:
        "WeBuild is a sass product designed to deliver a seamless project deployment experience. The backend repository houses the server-side code, responsible for handling authentication, user management , deployment service and other essential functionalities.",
      tags: [
        "Nest",
        "MongoDB",
        "React",
        "TypeScript",
        "Bootstrap",
        "Jest",
        "Prisma",
      ],
      image: webuild ,
    },

    {
      title: "Food Tracking System",
      github: "https://github.com/engyahmed7/food-tracking-system",
      description:
        "The Food Tracking System is a comprehensive solution designed for managing e-commerce logistics, specifically focused on shipping and payment integrations. This project includes an admin control panel built with Filament, real-time shipping data updates using Livewire, and a factory design pattern implementation for multiple payment gateways.",
      tags: [
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "Redis",
      ],
      image: food_tracking ,
    },
  ];

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
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-950" : "bg-gray-100"
      } text-${darkMode ? "white" : "gray-800"} transition-colors duration-300`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.2,
            }}
            animate={{
              x: [
                null,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                null,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute w-64 h-64 rounded-full bg-gradient-to-br 
            ${
              darkMode
                ? "from-indigo-900/10 via-purple-800/5 to-blue-900/10"
                : "from-indigo-400/10 via-purple-300/5 to-blue-400/10"
            } 
            blur-3xl`}
          />
        ))}
      </div>

      <motion.div
        className={`fixed w-96 h-96 rounded-full bg-gradient-to-r 
        ${
          darkMode
            ? "from-indigo-600/5 to-purple-600/5"
            : "from-indigo-300/10 to-purple-300/10"
        } 
        blur-3xl pointer-events-none z-0`}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`${
          darkMode ? "bg-gray-950/80" : "bg-white/80"
        } backdrop-blur-lg fixed w-full z-40 border-b ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 flex items-center justify-center"
              >
                <Code className="w-6 h-6" />
              </motion.div>
              <span className="text-xl font-bold">Engy Ahmed</span>
            </motion.div>

            <nav className="hidden md:flex space-x-8 items-center">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase()
                      ? darkMode
                        ? "text-white"
                        : "text-gray-900"
                      : darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
                    />
                  )}
                </motion.a>
              ))}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-yellow-300"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            </nav>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(true)}
              className={`md:hidden p-2 hover:${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              } rounded-lg`}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${
              darkMode ? "bg-gray-950/90" : "bg-white/90"
            } backdrop-blur-lg z-50 md:hidden`}
          >
            <div className="flex justify-end p-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 hover:${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                } rounded-lg`}
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="flex flex-col items-center space-y-8 pt-20"
            >
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-medium"
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-yellow-300"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center px-4 pt-20"
      >
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                darkMode ? "bg-white/20" : "bg-gray-800/10"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3,
              }}
              className="w-40 h-40 mx-auto mb-10 relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 blur-lg animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-indigo-400/30 rounded-full"
              />
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-1">
                <div
                  className={`w-full h-full rounded-full ${
                    darkMode ? "bg-gray-950" : "bg-white"
                  } flex items-center justify-center`}
                >
                  <Code className="w-14 h-14 text-indigo-400" />
                </div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent"
              >
                Engy Ahmed Abdelaziz
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-4"
            >
              <TypewriterEffect text="Full-stack developer with a strong focus on both frontend and backend technologies." />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-md text-gray-400 max-w-2xl mx-auto mb-12 flex items-center justify-center"
            >
              <Globe className="w-5 h-5 mr-2 text-indigo-400" />
              Alexandria, Egypt (Open to Relocation)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg font-medium flex items-center space-x-2 group shadow-lg shadow-indigo-500/20"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 border ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-800/50"
                    : "border-gray-300 hover:bg-gray-100"
                } rounded-lg font-medium transition-colors`}
              >
                <span>View Projects</span>
              </motion.a>
              <motion.a
                href={pdf}
                download="Engy_Ahmed_Abdelaziz.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-lg font-medium flex items-center space-x-2`}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
              <div
                className={`w-6 h-10 border-2 ${
                  darkMode ? "border-gray-600" : "border-gray-400"
                } rounded-full flex justify-center p-1`}
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-indigo-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

      <section
        id="projects"
        className={`py-20 px-4 ${
          darkMode ? "bg-gray-900/30" : "bg-gray-100/70"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Featured" highlight="Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden ${
                  darkMode ? "bg-gray-800/60" : "bg-white"
                } border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } shadow-lg group hover:shadow-indigo-500/10 transition-all duration-300`}
              >
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 font-medium flex items-center space-x-2 text-white text-sm"
                    >
                      <span>View details</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 ms-3 py-2 rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 font-medium flex items-center space-x-2 text-white text-sm"
                      >
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section
        id="contact"
        className={`py-20 px-4 ${
          darkMode ? "bg-gray-900/30" : "bg-gray-100/70"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Get In" highlight="Touch" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Let's Chat!</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Feel free to reach out for collaboration opportunities, job
                inquiries, or just to say hello! I'm always open to discussing
                new projects and ideas.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  {
                    icon: Mail,
                    value: "engya306@gmail.com",
                    label: "Email",
                    href: "mailto:engya306@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    value: "linkedin/engyahmed",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/engy-ahmed-4109751b7/",
                  },
                  {
                    icon: Github,
                    value: "github/engyahmed",
                    label: "GitHub",
                    href: "https://github.com/engyahmed7",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-4 rounded-lg ${
                        darkMode ? "bg-gray-800" : "bg-white"
                      } flex items-center space-x-4`}
                    >
                      <div className="p-2 rounded-lg bg-indigo-500/10">
                        <Icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <div className="text-sm text-gray-500">
                          {item.label}
                        </div>
                        <div
                          className={
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          {item.value}
                        </div>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800/60" : "bg-white"
                } border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } shadow-lg`}
              >
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        } mb-1`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className={`w-full p-3 rounded-lg border ${
                          darkMode
                            ? "bg-gray-900 border-gray-700 text-gray-300"
                            : "bg-white border-gray-300 text-gray-700"
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        } mb-1`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className={`w-full p-3 rounded-lg border ${
                          darkMode
                            ? "bg-gray-900 border-gray-700 text-gray-300"
                            : "bg-white border-gray-300 text-gray-700"
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } mb-1`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-900 border-gray-700 text-gray-300"
                          : "bg-white border-gray-300 text-gray-700"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } mb-1`}
                    >
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-900 border-gray-700 text-gray-300"
                          : "bg-white border-gray-300 text-gray-700"
                      } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg font-medium text-white shadow-lg shadow-indigo-500/20"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer
        className={`py-8 px-4 border-t ${
          darkMode
            ? "border-gray-800 text-gray-400"
            : "border-gray-200 text-gray-600"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Engy Ahmed. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/engyahmed7"
              className="hover:text-indigo-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/engy-ahmed-4109751b7/"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:engya306@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionHeader = ({ title, highlight }) => {
  const darkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold inline-block"
      >
        {title}{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
      />
    </div>
  );
};

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default App;
