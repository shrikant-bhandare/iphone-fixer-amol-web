import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, DollarSign, UserCheck, Shield, PenTool, Cpu, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Industry-leading warranty coverage for all display repairs",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Same-day doorstep repair service with real-time tracking",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: PenTool,
      title: "Advanced Tools",
      description: "State-of-the-art diagnostic and repair equipment",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Cpu,
      title: "Expert Repairs",
      description: "Component-level repairs by certified technicians",
      color: "from-red-400 to-red-600"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden charges",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: UserCheck,
      title: "Certified Team",
      description: "Apple-certified professionals with extensive experience",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Award,
      title: "Quality Parts",
      description: "Genuine replacement parts with warranty",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Quick Diagnosis",
      description: "AI-powered diagnostics for faster repairs",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="py-16 bg-tech-950">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
            Next-Generation Repair Technology
          </h2>
          <p className="text-lg text-tech-100 max-w-2xl mx-auto">
            Experience the future of device repairs with our advanced technical solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-tech-900 rounded-xl p-6 hover:bg-tech-800 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-tech-100">{feature.title}</h3>
              <p className="text-tech-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;