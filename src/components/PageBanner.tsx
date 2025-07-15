import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit as Circuit, Cpu, Zap, Shield, ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  const floatingIcons = [
    { Icon: Circuit, className: "w-12 h-12 text-tech-400 opacity-20" },
    { Icon: Cpu, className: "w-16 h-16 text-tech-300 opacity-20" },
    { Icon: Zap, className: "w-10 h-10 text-tech-500 opacity-20" },
    { Icon: Shield, className: "w-14 h-14 text-tech-400 opacity-20" }
  ];

  return (
    <div className="relative bg-tech-950 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-900/50 to-transparent"></div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((IconComponent, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: Math.sin(index) * 20
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5
            }}
            style={{
              top: `${20 + (index * 25)}%`,
              left: `${10 + (index * 20)}%`
            }}
          >
            <IconComponent.Icon className={IconComponent.className} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-xl text-tech-100 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Action button */}
          <motion.button
            className="mt-8 bg-tech-500 text-white px-8 py-3 rounded-lg hover:bg-tech-600 transition-colors flex items-center mx-auto group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-800 via-tech-400 to-tech-800"></div>

      {/* Tech circuit lines */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-24 text-tech-800 opacity-20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1200,0 L1200,120 L0,120 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8,8"
        />
        <path
          d="M0,60 Q300,120 600,60 T1200,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default PageBanner;