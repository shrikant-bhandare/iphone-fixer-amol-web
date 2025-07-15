import React from 'react';
import { Star, Award, Clock, Shield, Cpu, PenTool, Smartphone, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Experts = () => {
  const experts = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Apple Technician",
      experience: "12+ years",
      specialization: "iPhone & iPad Repairs",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      certifications: ["Apple Certified", "Mobile Device Repair"],
      rating: 4.9,
      expertise: ["Logic Board Repair", "Data Recovery", "Screen Replacement"],
      icon: Cpu
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "MacBook Specialist",
      experience: "8+ years",
      specialization: "Logic Board Repairs",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      certifications: ["MacBook Pro Certified", "Hardware Expert"],
      rating: 4.8,
      expertise: ["Liquid Damage Repair", "Component Level Repair", "Display Issues"],
      icon: PenTool
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Apple Watch Expert",
      experience: "6+ years",
      specialization: "Watch & Wearables",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      certifications: ["Watch Repair Certified", "Digital Crown Specialist"],
      rating: 4.9,
      expertise: ["Battery Replacement", "Water Resistance", "Screen Repair"],
      icon: Zap
    }
  ];

  const expertiseAreas = [
    {
      title: "Advanced Diagnostics",
      description: "State-of-the-art diagnostic tools for precise issue identification",
      icon: Cpu,
      stats: "99.9% Accuracy"
    },
    {
      title: "Micro-Soldering",
      description: "Component-level repairs with precision equipment",
      icon: PenTool,
      stats: "5000+ Repairs"
    },
    {
      title: "Data Recovery",
      description: "Advanced data recovery from damaged devices",
      icon: Shield,
      stats: "100% Success Rate"
    },
    {
      title: "Express Repair",
      description: "Same-day repair service for urgent fixes",
      icon: Clock,
      stats: "30min Average"
    }
  ];

  return (
    <div className="py-20 bg-tech-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-tech-900/80 via-tech-950/90 to-tech-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
            Technical Excellence
          </h2>
          <p className="text-xl text-tech-100">
            Join thousands of satisfied customers who trust us with their devices
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-tech-800/50 backdrop-blur-sm border border-tech-700 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-tech-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <area.icon className="w-6 h-6 text-tech-400" />
              </div>
              <h3 className="text-tech-100 font-semibold mb-2">{area.title}</h3>
              <p className="text-tech-300 text-sm">{area.description}</p>
              <div className="text-tech-400 text-sm mt-2">{area.stats}</div>
            </motion.div>
          ))}
        </div>

        {/* Expert Profiles */}
        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              className="bg-tech-900/50 backdrop-blur-sm border border-tech-700 p-8 rounded-xl group hover:border-tech-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-8">
                <div className="absolute -top-4 -right-4 bg-tech-500/20 p-3 rounded-lg backdrop-blur-sm">
                  <expert.icon className="w-6 h-6 text-tech-400 animate-pulse-slow" />
                </div>
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-tech-800"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1 text-tech-100">{expert.name}</h3>
                <p className="text-tech-400">{expert.role}</p>
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(expert.rating)
                          ? 'text-tech-400 fill-current'
                          : 'text-tech-800'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-tech-300">{expert.rating}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-tech-200">
                  <Clock className="w-5 h-5 text-tech-400 mr-2" />
                  <span>{expert.experience} Experience</span>
                </div>
                <div className="flex items-center text-tech-200">
                  <Award className="w-5 h-5 text-tech-400 mr-2" />
                  <span>{expert.specialization}</span>
                </div>
                <div className="border-t border-tech-800 pt-4 mt-4">
                  <h4 className="font-semibold text-tech-100 mb-2">Expert in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-tech-800/50 text-tech-300 px-3 py-1 rounded-full text-sm border border-tech-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-tech-800 to-tech-900 rounded-2xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
          <h3 className="text-3xl font-bold mb-6 text-tech-100">Ready to Experience Our Expertise?</h3>
          <p className="text-xl mb-8 text-tech-200">
            Get your device repaired by our certified experts with lifetime warranty
          </p>
          <motion.button 
            className="bg-tech-500 text-white px-8 py-4 rounded-xl hover:bg-tech-600 transition-all flex items-center mx-auto group shadow-lg shadow-tech-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Book a Repair Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Experts;