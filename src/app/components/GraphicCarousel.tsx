'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const graphics = [
  '/design1.png',
  '/design2.jpg',
  '/design3.jpg',
  '/design4.png',
  '/design5.png',
  '/design6.png',
];

export default function GraphicGallery() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Keyboard navigation and Esc to close
  useEffect(() => {
    if (modalIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalIndex(null);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line
  }, [modalIndex]);

  const openModal = (idx: number) => setModalIndex(idx);

  const closeModal = () => setModalIndex(null);

  const prevImage = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex - 1 + graphics.length) % graphics.length);
  }, [modalIndex]);

  const nextImage = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex + 1) % graphics.length);
  }, [modalIndex]);

  return (
    <motion.section
      id="graphics"
      className="mt-1 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8">Graphic Design Showcase</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {graphics.map((src, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => openModal(idx)}
            className="group relative border-2 border-white rounded-lg overflow-hidden shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition aspect-[16/10] bg-[#18181b]"
          >
            <div className="w-full h-full">
              <Image
                src={src}
                alt={`Graphic ${idx + 1}`}
                width={600}
                height={375}
                className="transition-transform duration-300 ease-in-out w-full h-full object-cover group-hover:scale-105"
                style={{ display: 'block' }}
                priority={idx === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-100 group-hover:opacity-80 transition-opacity duration-200 pointer-events-none">
                <span className="text-white text-lg font-bold drop-shadow-lg select-none">
                  Click to view
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-transparent p-2 rounded-lg flex items-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Prev button */}
              {graphics.length > 1 && (
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white text-3xl z-20 hover:bg-opacity-80 transition"
                  onClick={prevImage}
                  aria-label="Previous"
                  style={{ left: '-3rem' }}
                  tabIndex={0}
                >
                  &#8592;
                </button>
              )}
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl font-bold z-20 hover:text-green-400"
                aria-label="Close"
                tabIndex={0}
              >
                &times;
              </button>
              <Image
                src={graphics[modalIndex!]}
                alt="Full Graphic"
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto h-auto rounded-lg mx-auto"
                style={{ display: 'block', objectFit: 'contain' }}
                priority
              />
              {/* Next button */}
              {graphics.length > 1 && (
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white text-3xl z-20 hover:bg-opacity-80 transition"
                  onClick={nextImage}
                  aria-label="Next"
                  style={{ right: '-3rem' }}
                  tabIndex={0}
                >
                  &#8594;
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}