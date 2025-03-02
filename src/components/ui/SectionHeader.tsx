import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlight }) => {
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

export default SectionHeader;