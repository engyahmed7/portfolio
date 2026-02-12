import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { projects as projectsData } from "../../data/projects";
import sizely from "../../assets/sizely.png";
import vacation from "../../assets/vacation.png";
import webuild from "../../assets/webuild.png";
import vehicleAI from "../../assets/vehicleAI.jpeg";
import rntls from "../../assets/rntls.png";

interface ProjectsProps {
  darkMode: boolean;
}

const imageMap: Record<string, string> = {
  "/src/assets/sizely.png": sizely,
  "/src/assets/vacation.png": vacation,
  "/src/assets/webuild.png": webuild,
  "/src/assets/rntls.png": rntls,
};

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = projectsData.map((project) => ({
    ...project,
    image: imageMap[project.image] || vehicleAI, 
  }));

  return (
    <section
      id="projects"
      className={`py-20 px-4 ${darkMode ? "bg-gray-900/30" : "bg-gray-100/70"}`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Featured" highlight="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  {project.github && (
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
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 font-medium flex items-center space-x-2 text-white text-sm ${
                        project.github ? "ms-3" : ""
                      }`}
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
