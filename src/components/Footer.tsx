import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Web Dev Lane</p>
            <p>Codeville, IN 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors duration-300">
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-xl font-bold mb-4">Inspirational Quote</h3>
            <blockquote className="italic">
              "The only way to do great work is to love what you do."
              <footer className="mt-2 text-sm">- Steve Jobs</footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center animate-fade-in-up animation-delay-800">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

