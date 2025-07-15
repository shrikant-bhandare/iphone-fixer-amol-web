import React from 'react';
import { ArrowRight, Shield, Clock, PenTool, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CTAProps {
  onRepairClick?: () => void;
}

const CTA = ({ onRepairClick }: CTAProps) => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "All repairs covered"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Quick turnaround time"
    },
    {
      icon: PenTool,
      title: "Expert Technicians",
      description: "Certified professionals"
    },
    {
      icon: Zap,
      title: "Quality Parts",
      description: "Genuine components"
    }
  ];

  const handleClick = () => {
    if (onRepairClick) {
      onRepairClick();
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="bg-tech-900 py-20 relative overflow-hidden animated-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-tech-900/60 via-tech-950/80 to-tech-800/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-tech-300 to-tech-400 text-transparent bg-clip-text text-glow">
            Ready to Experience Our Expertise?
          </h2>
          <p className="text-xl text-tech-100 mb-8">
            Join thousands of satisfied customers who trust us with their devices
          </p>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-effect border border-tech-600/50 p-6 rounded-xl card-modern"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-tech-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-tech-400" />
                </div>
                <h3 className="text-tech-100 font-semibold mb-2">{feature.title}</h3>
                <p className="text-tech-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.button 
            onClick={handleClick}
                // className="glass-effect text-white border mx-auto border-tech-600/50 p-6 rounded-xl card-modern"
            className="glass-effect border btn-modern text-white px-8 py-4 rounded-xl mx-auto flex items-center  group font-semibold "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Repair Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-600 via-tech-400 to-tech-600"></div>
    </div>
  );
};

export default CTA;