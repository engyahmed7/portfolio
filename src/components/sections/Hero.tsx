import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, ArrowRight, Download } from "lucide-react";
import TypewriterEffect from "../ui/TypewriterEffect";
import pdf from "../../assets/Engy_Ahmed_Abdelaziz.pdf";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
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
  );
};

export default Hero;
