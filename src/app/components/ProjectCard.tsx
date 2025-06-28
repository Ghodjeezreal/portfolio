'use client';

import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  image?: string;
  tech?: string[];
};

export default function ProjectCard({ title, description, link, image, tech }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-neutral-900 p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-700"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4 border border-gray-600"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      {tech && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="text-xs bg-white text-black px-2 py-1 rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white underline hover:text-gray-300"
      >
        View Project
      </a>
    </motion.div>
  );
}
