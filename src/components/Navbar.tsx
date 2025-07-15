import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onRepairClick: () => void;
}

const Navbar = ({ onRepairClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Who we are' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-tech-950/95 backdrop-blur-md shadow-lg' 
          : 'bg-tech-950'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
          >
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="iphone-fixer-logo" className="w-[65px] h-[65px]"/>
              <span>Iphone Fixer Amol</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-tech-100 hover:text-tech-300 transition-colors ${
                  location.pathname === link.path ? 'text-tech-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              onClick={onRepairClick}
              className="bg-tech-500 text-white px-6 py-2 rounded-lg hover:bg-tech-600 transition-colors flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Repair Now
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6 text-tech-100">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-tech-400" />
              <span>9876 99999</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-tech-400" />
              <span>Pune</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-tech-100 hover:text-tech-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-tech-900 border-t border-tech-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-tech-100 hover:text-tech-300 transition-colors ${
                      location.pathname === link.path ? 'text-tech-400' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    onRepairClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-tech-500 text-white px-6 py-2 rounded-lg hover:bg-tech-600 transition-colors text-left"
                >
                  Repair Now
                </button>
                <div className="pt-4 border-t border-tech-800">
                  <div className="flex items-center space-x-2 text-tech-100 mb-2">
                    <Phone className="w-5 h-5 text-tech-400" />
                    <span>9876 99999</span>
                  </div>
                  <div className="flex items-center space-x-2 text-tech-100">
                    <MapPin className="w-5 h-5 text-tech-400" />
                    <span>Pune</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;