import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Watch, Tablet, ChevronRight, Shield, Zap } from 'lucide-react';

interface HeroProps {
  onRepairClick: () => void;
}

const Hero = ({ onRepairClick }: HeroProps) => {
  const deviceButtons = [
    { icon: Smartphone, label: 'iPhone Repair' },
    { icon: Watch, label: 'Watch Repair' },
    { icon: Tablet, label: 'iPad Repair' },
    { icon: Laptop, label: 'MacBook Repair' }
  ];

  return (
    <div className="relative overflow-hidden bg-tech-950 text-white animated-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-tech-900/60 via-tech-950/80 to-tech-800/60"></div>
        
        {/* Animated circuit lines */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full text-tech-800 opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 10 L8 10 L10 8 L20 8 M10 0 L10 20 M12 10 L20 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 min-h-[90vh] flex items-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Shield className="w-5 h-5 text-tech-400" />
              <span className="text-tech-400 font-medium">Certified Repair Experts</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-tech-300 to-tech-400 text-transparent bg-clip-text text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Professional Apple Device Repairs
            </motion.h1>

            <motion.p
              className="text-xl text-tech-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Expert repairs at your doorstep with lifetime warranty
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {deviceButtons.map((device, index) => (
                <motion.button
                  key={device.label}
                  onClick={onRepairClick}
                  className="glass-effect border border-tech-600/50 p-4 rounded-xl flex items-center justify-center hover:bg-tech-500/20 hover:border-tech-500 transition-all group card-modern"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <device.icon className="w-6 h-6 text-tech-400 group-hover:text-tech-300 transition-colors" />
                  <span className="ml-3 text-tech-100 group-hover:text-tech-50">{device.label}</span>
                </motion.button>
              ))}
            </motion.div>

            <motion.button
              onClick={onRepairClick}
              className="btn-modern text-white px-8 py-4 rounded-xl flex items-center group font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Repair Process
              <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Device Repair"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-tech-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tech-400/10 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;