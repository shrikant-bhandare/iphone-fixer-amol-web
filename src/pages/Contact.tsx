import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "24/7 Support Available",
      action: "+91 9876 99999",
      href: "tel:+919876999999"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Quick Response Time",
      action: "repair@iphonefixeramol.com",
      href: "mailto:repair@iphonefixeramol.com"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      subtitle: "Instant Support",
      action: "Start Chat",
      href: "#"
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
          {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
            Connect With Us
          </h1> */}
          <p className="text-xl text-tech-100">
            We're here to help! Reach out to us through any of these channels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-tech-900/50 backdrop-blur-sm border border-tech-700 p-8 rounded-xl text-center group hover:border-tech-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-tech-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <method.icon className="w-8 h-8 text-tech-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-tech-100">{method.title}</h3>
              <p className="text-tech-300 mb-4">{method.subtitle}</p>
              <a 
                href={method.href}
                className="text-xl font-semibold text-tech-400 hover:text-tech-300 transition-colors"
              >
                {method.action}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-2">
                    Your Name
                
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-tech-900 border border-tech-700 rounded-lg focus:ring-2 focus:ring-tech-500 focus:border-transparent text-tech-100"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-tech-900 border border-tech-700 rounded-lg focus:ring-2 focus:ring-tech-500 focus:border-transparent text-tech-100"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-tech-900 border border-tech-700 rounded-lg focus:ring-2 focus:ring-tech-500 focus:border-transparent text-tech-100"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tech-300 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-tech-900 border border-tech-700 rounded-lg focus:ring-2 focus:ring-tech-500 focus:border-transparent text-tech-100"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="repair">Device Repair</option>
                    <option value="quote">Get a Quote</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-tech-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-tech-900 border border-tech-700 rounded-lg focus:ring-2 focus:ring-tech-500 focus:border-transparent text-tech-100"
                  rows={4}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full btn-modern text-white px-8 py-4 rounded-xl flex items-center justify-center group font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              {submitted && (
                <div className="flex items-center justify-center text-tech-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully!
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-tech-300 to-tech-500 text-transparent bg-clip-text">
              Visit Our Store
            </h2>
            <div className="bg-tech-900/50 backdrop-blur-sm border border-tech-700 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3423.0364273194905!2d73.77009032465284!3d18.547945418338543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIphone%20Fixer%20(the%20iphone%20technician)%20%2C%20Shop%20no.10%2C%20Mount%20Unique%20Residency%2C%20Pashan%20-%20Sus%20Rd%2C%20near%20Pratham%20Wine%2C%20Mohan%20Nagar%20Co-Op%20Society%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e1!3m2!1sen!2sin!4v1752610068160!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              ></iframe>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-tech-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-tech-100">Store Location</h3>
                      <p className="text-tech-300">
                         Shop no.10, Mount Unique Residency,<br/> Pashan - Sus Rd, near Pratham Wine,<br/> Mohan Nagar Co-Op Society, Baner, <br/>Pune, Maharashtra 411045
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-tech-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1 text-tech-100">Working Hours</h3>
                      <p className="text-tech-300">
                        MONDAY CLOSED !!<br />
                        We Remain Closed On Every Monday.<br /> 
                        Tuesday - sunday: 9:00 AM - 8:00 PM<br />
                        Sunday: 11:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-tech-900 rounded-xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
          <h2 className="text-2xl font-bold mb-4 text-tech-100">Need Immediate Assistance?</h2>
          <p className="text-lg mb-6 text-tech-200">
            Our support team is available 24/7 to help you with any queries
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="tel:+919876999999"
              className="bg-tech-500 text-white px-6 py-3 rounded-lg hover:bg-tech-600 transition-all flex items-center shadow-lg shadow-tech-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </motion.a>
            <motion.button
              className="bg-tech-900 text-tech-100 border border-tech-700 px-6 py-3 rounded-lg hover:bg-tech-800 hover:border-tech-600 transition-all flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;