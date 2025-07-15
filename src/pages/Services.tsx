import React from 'react';
import { Smartphone, Laptop, Watch, Tablet, CheckCircle, Shield, Clock, PenTool as Tool, Cpu, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Smartphone,
      title: "iPhone Repairs",
      features: [
        "Screen Replacement",
        "Battery Replacement",
        "Camera Repair",
        "Water Damage Repair"
      ]
    },
    {
      icon: Laptop,
      title: "MacBook Repairs",
      features: [
        "Display Replacement",
        "Keyboard Replacement",
        "Logic Board Repair",
        "Data Recovery"
      ]
    },
    {
      icon: Watch,
      title: "Apple Watch Repairs",
      features: [
        "Screen Replacement",
        "Battery Service",
        "Sensor Repair",
        "Button Repair"
      ]
    },
    {
      icon: Tablet,
      title: "iPad Repairs",
      features: [
        "Screen Replacement",
        "Battery Replacement",
        "Charging Port Repair",
        "Touch ID Repair"
      ]
    }
  ];

  const process = [
    {
      icon: Shield,
      title: "Book a Repair",
      description: "Schedule a convenient time for our technician to visit"
    },
    {
      icon: Tool,
      title: "Expert Diagnosis",
      description: "Professional assessment of your device's issues"
    },
    {
      icon: Zap,
      title: "Quick Repair",
      description: "Swift repair service with genuine parts"
    }
  ];

  return (
    <div className="bg-tech-950">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
            Professional Repair Services
          </h1>
          <p className="text-xl text-tech-100">
            Expert repair solutions for all your Apple devices with lifetime warranty
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-tech-900/50 backdrop-blur-sm border border-tech-700 p-8 rounded-xl group hover:border-tech-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-tech-400 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-tech-100">{service.title}</h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-tech-200">
                    <CheckCircle className="w-5 h-5 text-tech-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-tech-900 rounded-xl p-12 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
            Our Repair Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-tech-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-tech-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-tech-100">{step.title}</h3>
                <p className="text-tech-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-tech-100 mb-8">
            Book your repair service now and get your device fixed today!
          </p>
          <motion.button 
            onClick={() => navigate('/contact')}
            className="bg-tech-500 text-white px-8 py-4 rounded-xl hover:bg-tech-600 transition-all flex items-center mx-auto group shadow-lg shadow-tech-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Repair
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;