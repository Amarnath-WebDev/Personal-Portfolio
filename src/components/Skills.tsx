import React from 'react';

const skills = {
  frontend: [
    { name: "HTML5/CSS3", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Tailwind CSS", level: 85 }
  ],
  backend: [
    { name: "Node.js", level: 82 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 78 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Webpack", level: 75 }
  ]
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
            {skills.frontend.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Backend</h3>
            {skills.backend.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Tools</h3>
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}