import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => (
  <div className="bg-tech-950 min-h-screen py-16">
    <div className="container mx-auto px-4 max-w-3xl text-tech-100">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
        Sitemap
      </h1>
      <ul className="list-disc pl-6 space-y-2 text-tech-200">
        <li><Link to="/" className="hover:underline text-tech-400">Home</Link></li>
        <li><Link to="/about" className="hover:underline text-tech-400">Who we are</Link></li>
        <li><Link to="/services" className="hover:underline text-tech-400">Services</Link></li>
        <li><Link to="/blog" className="hover:underline text-tech-400">Blog</Link></li>
        <li><Link to="/contact" className="hover:underline text-tech-400">Contact</Link></li>
        <li><Link to="/privacy" className="hover:underline text-tech-400">Privacy Policy</Link></li>
        <li><Link to="/terms" className="hover:underline text-tech-400">Terms of Service</Link></li>
        <li><Link to="/sitemap" className="hover:underline text-tech-400">Sitemap</Link></li>
      </ul>
    </div>
  </div>
);

export default Sitemap;
