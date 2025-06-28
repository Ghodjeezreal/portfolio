// src/components/SplitHero.tsx

'use client';

import Image from 'next/image';

export default function SplitHero() {
  return (
    <section className="w-full h-screen flex">
      {/* Left Side - Designer */}
      <div className="w-1/2 bg-white text-black flex flex-col justify-center items-center p-10">
        <h1 className="text-6xl font-bold mb-4">designer</h1>
        <p className="text-lg max-w-md text-center">
          Product designer specialising in UI design and design systems.
        </p>
      </div>

      {/* Right Side - Coder */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-6xl font-bold mb-4">&lt;coder&gt;</h1>
        <p className="text-lg max-w-md text-center">
          Front end developer who writes clean, elegant and efficient code.
        </p>
      </div>

      {/* Overlay Image - Centered Split Face */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] z-10">
        <Image
          src="/split-face.png" // Replace with your image later
          alt="Split Face"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}
