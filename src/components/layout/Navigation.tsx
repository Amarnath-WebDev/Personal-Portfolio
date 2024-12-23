import React from 'react';

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

export default function Navigation() {
  return (
    <nav className="absolute top-0 w-full p-6">
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <a 
              href={item.href} 
              className="hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}