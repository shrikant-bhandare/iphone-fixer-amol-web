import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Clock, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "300,000+",
      label: "Devices Repaired",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Rating",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Clock,
      value: "30 Min",
      label: "Average Repair Time",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Award,
      value: "19+",
      label: "Cities Covered",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className="py-16 bg-tech-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Value */}
              <motion.div 
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
                whileInView={{ scale: [1, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, times: [0, 0.5, 1] }}
              >
                {stat.value}
              </motion.div>

              {/* Label */}
              <p className="text-tech-100 font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-800 via-tech-400 to-tech-800"></div>
    </div>
  );
};

export default Stats;