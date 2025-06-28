// src/app/page.tsx

'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { FaXTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from 'react-icons/fa6';


const projects = [
  {
    title: 'Freddies Concepts Website',
    description: 'A standard website built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive and animated.',
    link: 'https://freddies.vercel.app',
    image: '/freddies.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
  title: 'Obazz Fc Website',
  description: 'Freddies Concepts Website built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive and animated.',
  link: 'https://obazz-fc.vercel.app',
  image: '/obazzfc.png',
  tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
},
  {
    title: 'Vitex Kapital',
    description: 'A full banking dashboard and admin portal built with PHP, MySQL, and modern frontend technologies. Includes user login, transfers, transactions, and admin approvals.',
    link: 'https://vitexkapital.com',
    image: '/vitexkapital.png',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
 {
    title: 'Ghods Financial',
    description: 'A Next.js, Tailwind CSS, and Framer Motion. Fully responsive and animated',
    link: 'https://ghod-financial.vercel.app/',
    image: '/financial.png',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
];
export default function Home() {
  return (
    <>
    <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src="/bg-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div className="fixed inset-0 bg-black/90 z-[-1]" />


      <Navbar />

      <main className="min-h-screen text-white font-sans flex flex-col items-center justify-center p-6 pt-32">
        {/* Hero Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
<h1 className="text-5xl font-bold mb-4">
  <span className="blinking-cursor">Hi, I&apos;m Fredrick Okojie</span>
</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-6">
            I&apos;m a web developer and creative technologist building modern, responsive websites and apps.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md transition"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* About Section */}
        <motion.section
          id="about"
          className="mt-32 text-center max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <p className="text-gray-400 py-3">
            I&apos;m passionate about transforming ideas into interactive digital experiences. With a strong foundation in frontend development and a flair for clean, modern UI design, I specialize in building user-friendly websites and dashboards.
          </p>
        </motion.section>
        <a
  href="/Freddie-CV.pdf"
  download
  className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-full shadow transition hover:scale-105"
>
  Download My CV
</a>


        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mt-32 w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
  key={index}
  title={project.title}
  description={project.description}
  link={project.link}
  image={project.image}
  tech={project.tech}
/>

            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mt-32 text-center max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <p className="text-gray-400 mb-6">Want to work together or ask a question? Reach out below:</p>
          <motion.a
            href="mailto:fredrickokojie@yahoo.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-full transition"
          >
            Email Me
          </motion.a>
        </motion.section>
         <footer className="mt-32 text-center text-gray-400">
          <a
            href="/Freddie-CV.pdf"
            download
            className="inline-block mb-4 text-white font-semibold py-2 px-4 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Download My CV
          </a>
          <div className="mt-6 flex justify-center gap-6 text-2xl">
            <a href="https://x.com/ghodjeezreal" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:text-green-400 transition" />
            </a>
            <a href="https://linkedin.com/in/fredrick-okojie-a36980371" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-green-400 transition" />
            </a>
            <a href="https://github.com/Ghodjeezreal" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-green-400 transition" />
            </a>
            <a href="https://wa.me/2348165954425" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-400 transition" />
            </a>
            <a href="tel:+2348165954425">
              <FaPhone className="hover:text-green-400 transition" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
