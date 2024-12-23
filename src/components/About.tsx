import React from 'react';
import { Code, Brain, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 mb-6">
              As a BCA graduate from Gossner College, Ranchi, I've developed a strong foundation in computer science and a passion for creating innovative web solutions. My journey in web development began during my academic years and has evolved into a professional career focused on building impactful digital experiences.
            </p>
            <p className="text-gray-600">
              I specialize in modern web technologies and take pride in writing clean, efficient code that solves real-world problems. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="p-4 bg-blue-100 rounded-lg">
                <Code className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold">Technical Excellence</h4>
                <p className="text-gray-600">Committed to writing clean, maintainable code and staying current with industry best practices.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-4 bg-blue-100 rounded-lg">
                <Brain className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold">Problem Solver</h4>
                <p className="text-gray-600">Analytical thinker with a knack for finding elegant solutions to complex challenges.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-4 bg-blue-100 rounded-lg">
                <Rocket className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold">Continuous Growth</h4>
                <p className="text-gray-600">Always learning and exploring new technologies to enhance my development capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}