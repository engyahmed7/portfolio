import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useMousePosition } from './hooks/useMousePosition';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { scrollProgress, activeSection } = useScrollProgress();
  const mousePosition = useMousePosition();

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
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

      <Header 
        activeSection={activeSection} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;