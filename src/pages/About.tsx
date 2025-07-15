import React from 'react';
import { Smartphone, Shield, Cpu, PenTool, Users, Award, Clock, Zap, ShipIcon as ChipIcon, Settings, Workflow, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
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
            Revolutionizing Device Repair
          </h1>
          <p className="text-xl text-tech-100">
            Pioneering the future of Apple device repairs with cutting-edge technology and expertise since 2010.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Technological Journey
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-800"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  year: "2010",
                  title: "Foundation",
                  description: "Founded with a vision to revolutionize device repair",
                  icon: Cpu
                },
                {
                  year: "2015",
                  title: "Innovation",
                  description: "Pioneered same-day repair service",
                  icon: Zap
                },
                {
                  year: "2020",
                  title: "Expansion",
                  description: "Launched doorstep repair service",
                  icon: Settings
                },
                {
                  year: "2024",
                  title: "AI Integration",
                  description: "AI-powered diagnostics launch",
                  icon: Smartphone
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.year}
                  className="flex items-center justify-end md:justify-between group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="hidden md:block w-5/12 text-right pr-8 group-hover:transform group-hover:-translate-x-2 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2 text-tech-100">{item.year}</h3>
                    <p className="text-tech-300">{item.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-tech-500 rounded-xl flex items-center justify-center z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-tech-950" />
                  </div>
                  <div className="md:w-5/12 md:pl-8 pl-4 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="md:hidden text-2xl font-bold mb-2 text-tech-100">{item.year}</h3>
                    <p className="text-tech-300 md:hidden">{item.description}</p>
                    <div className="md:block hidden">
                      <h3 className="text-2xl font-bold mb-2 text-tech-100">{item.title}</h3>
                      <p className="text-tech-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Capabilities */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Technical Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "Advanced Diagnostics",
                description: "State-of-the-art diagnostic tools for precise problem identification"
              },
              {
                icon: Cpu,
                title: "Microsoldering",
                description: "Expert-level board repair and component replacement"
              },
              {
                icon: Shield,
                title: "Data Security",
                description: "Advanced data protection protocols during repairs"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                className="bg-tech-900/50 backdrop-blur-sm border border-tech-700 p-8 rounded-xl group hover:border-tech-600 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-tech-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <capability.icon className="w-8 h-8 text-tech-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-tech-100">{capability.title}</h3>
                <p className="text-tech-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-tech-900 rounded-2xl p-12 mb-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { value: "300K+", label: "Devices Repaired" },
              { value: "19+", label: "Cities Covered" },
              { value: "50+", label: "Expert Technicians" },
              { value: "4.9", label: "Customer Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, times: [0, 0.5, 1] }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-tech-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="text-center mb-24">
          <motion.h2 
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Technical Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Chief Technical Officer",
                experience: "15+ years in advanced mobile repair",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              },
              {
                name: "Priya Singh",
                role: "Head of Innovation",
                experience: "Expert in iPhone board repairs",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              },
              {
                name: "Amit Patel",
                role: "Technical Lead",
                experience: "Specialized in data recovery",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-tech-900/50 backdrop-blur-sm border border-tech-700 p-8 rounded-xl group hover:border-tech-600 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-tech-800"
                />
                <h3 className="text-xl font-bold mb-2 text-tech-100">{member.name}</h3>
                <p className="text-tech-400 mb-4">{member.role}</p>
                <p className="text-tech-300">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-tech-800 to-tech-900 rounded-2xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
          <h2 className="text-3xl font-bold mb-6 text-tech-100">Ready to Experience Our Expertise?</h2>
          <p className="text-xl mb-8 text-tech-200 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their devices
          </p>
          <motion.button 
            className="bg-tech-500 text-white px-8 py-4 rounded-xl hover:bg-tech-600 transition-all flex items-center mx-auto group shadow-lg shadow-tech-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Book a Repair Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;