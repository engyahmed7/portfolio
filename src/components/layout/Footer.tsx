import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
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
  );
};

export default Footer;