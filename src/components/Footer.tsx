import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Iphone-fixer-amol-100067477634576/', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/iphone_fixer_pune/?hl=en', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Who we are' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy', label: 'Privacy' }
  ];

  const services = [
    { label: 'iPhone Repair', to: '/services' },
    { label: 'iPad Repair', to: '/services' },
    { label: 'MacBook Repair', to: '/services' },
    { label: 'iWatch Repair', to: '/services' },
    { label: 'Data Recovery', to: '/services' },
    { label: 'Water Damage', to: '/services' }
  ];

  return (
    <footer className="bg-tech-950 text-tech-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <motion.h2 
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Iphone Fixer Amol
            </motion.h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tech-400" />
                <a href="mailto:repair@iphonefixeramol.com" className="hover:text-tech-300 transition-colors">
                  repair@iphonefixeramol.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tech-400" />
                <a href="tel:+919075821821" className="hover:text-tech-300 transition-colors">
                  9075821821 
                </a> / 
                <a href="tel:+919075821821" className="hover:text-tech-300 transition-colors">
                  9307025605
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-tech-400" />
                <span>Shop no.10, Mount Unique Residency, </span>
              </div>
              <div className="flex items-center space-x-3">
                <span>Pashan - Sus Rd,near Pratham Wine, Mohan Nagar Co-Op Society, Baner, Pune, Maharashtra 411045</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-tech-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    className="hover:text-tech-300 transition-colors flex items-center group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 text-tech-300">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="hover:text-tech-300 transition-colors flex items-center group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-6 text-tech-300">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="bg-tech-900 p-3 rounded-lg hover:bg-tech-800 transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-tech-400 group-hover:text-tech-300 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tech-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-tech-300">
            <p>© 2025 IPHONE FIXER AMOL. All rights reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-tech-400 transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-tech-400 transition-colors">Privacy Policy</Link>
              <Link to="/sitemap" className="hover:text-tech-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;