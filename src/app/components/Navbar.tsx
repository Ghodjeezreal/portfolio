'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-black text-white shadow z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Fredrick .O.
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="#projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-black text-white text-center py-4 space-y-4">
          <li><Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Home</Link></li>
          <li><Link href="#about" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">About</Link></li>
          <li><Link href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Projects</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-gray-300">Contact</Link></li>
        </ul>
      )}
    </motion.nav>
  );
}
