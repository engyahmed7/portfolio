import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import sizely from '../../assets/sizely.png';
import vacation from '../../assets/vacation.png';
import webuild from '../../assets/webuild.png';
import food_tracking from '../../assets/food_tracking.png';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
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
      image: sizely,
    },
    {
      title: "Vacation Tracker",
      github: "https://github.com/engyahmed7/Vacation_Tracker",
      description:
        "A comprehensive vacation management system with dual-approval workflow and Mattermost integration. The system supports three primary roles: Admin, HR, and Supervisor, ensuring a structured approval workflow. The application integrates with Mattermost chat to provide real-time notifications regarding vacation requests and approvals.",
      tags: ["Laravel", "PHP", "Filament", "MySQL", "Eloquent", "Bootstrap"],
      demo: "https://vacation-tracker.free.nf/",
      image: vacation,
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
      image: webuild,
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
      image: food_tracking,
    },
  ];

  return (
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                      target="_blank"
                      rel="noopener noreferrer"
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
  );
};

export default Projects;