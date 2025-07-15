import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, FileText, PenTool, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Select Device & Issue",
      description: "Choose your device and describe the problem using our AI-powered system",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FileText,
      title: "Instant Quote",
      description: "Get an immediate price estimate with our real-time pricing engine",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: PenTool,
      title: "Expert Repair",
      description: "Our certified technician arrives with advanced repair equipment",
      color: "from-green-400 to-green-600"
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
            Advanced Repair Process
          </h2>
          <p className="text-lg text-tech-100 max-w-2xl mx-auto">
            Experience our streamlined, technology-driven repair service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-tech-800 -translate-y-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 right-4 bg-tech-900 text-tech-300 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-tech-900 rounded-xl p-6 h-full group hover:bg-tech-800 transition-colors duration-300">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${step.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-tech-100">{step.title}</h3>
                <p className="text-tech-300 mb-4">{step.description}</p>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-tech-400" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;