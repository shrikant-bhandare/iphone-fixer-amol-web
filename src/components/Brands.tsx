import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
  return (
    <div className="py-12 bg-tech-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Leading Brands
        </motion.h2>
        <div className="flex justify-center items-center space-x-12">
          {[
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              alt: "Apple",
              className: "h-12 invert"
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
              alt: "Samsung",
              className: "h-8 invert"
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Sony_logo.svg",
              alt: "Sony",
              className: "h-8 invert"
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              alt: "Google",
              className: "h-8 invert"
            }
          ].map((brand, index) => (
            <motion.img
              key={brand.alt}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.className} opacity-50 hover:opacity-100 transition-opacity`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;