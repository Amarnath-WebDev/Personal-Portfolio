import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { 
    href: "https://github.com", 
    icon: Github,
    label: "GitHub Profile"
  },
  { 
    href: "https://linkedin.com", 
    icon: Linkedin,
    label: "LinkedIn Profile"
  },
  { 
    href: "mailto:contact@example.com", 
    icon: Mail,
    label: "Email Contact"
  }
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          className="p-2 hover:text-blue-400 transition-colors"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}