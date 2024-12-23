import React from 'react';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Amar Nath Kumar</h1>
          <h2 className="text-2xl text-blue-400 mb-6">Web Developer</h2>
          <p className="text-xl mb-8">
            Crafting exceptional digital experiences with clean code and creative solutions
          </p>
          <SocialLinks />
        </div>
        <div className="md:w-1/3 mt-12 md:mt-0">
          <img
            src="https://avatars.githubusercontent.com/u/190850274?v=4"
            alt="Amar Nath Kumar"
            className="rounded-full w-64 h-64 object-cover border-4 border-blue-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}