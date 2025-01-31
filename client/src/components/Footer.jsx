import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Links */}
          <a
            href="https://www.linkedin.com/in/praneeth-kandukuri-3a0457280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Praneeth76"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
          >
            GitHub
          </a>
            <Link to="/contact" className="text-white hover:text-gray-400">Email</Link>
        </div>

        {/* Copyright & Contact Info */}
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Praneeth Kandukuri. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
