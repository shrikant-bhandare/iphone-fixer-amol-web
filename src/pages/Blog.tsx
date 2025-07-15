import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const navigate = useNavigate();
  const posts = [
    {
      id: 1,
      title: "How to Extend Your iPhone's Battery Life",
      excerpt: "Learn the best practices to maintain your iPhone's battery health and extend its lifespan.",
      image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "March 15, 2024",
      author: "Tech Team",
      readTime: "5 min read",
      views: "1.2k",
      category: "Tips & Tricks"
    },
    {
      id: 2,
      title: "Common MacBook Issues and Their Solutions",
      excerpt: "Discover quick fixes for the most common MacBook problems you might encounter.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "March 12, 2024",
      author: "Repair Experts",
      readTime: "8 min read",
      views: "2.5k",
      category: "Troubleshooting"
    },
    {
      id: 3,
      title: "Why Choose Professional Apple Device Repair",
      excerpt: "Understanding the importance of professional repair services for your Apple devices.",
      image: "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "March 10, 2024",
      author: "Service Team",
      readTime: "6 min read",
      views: "1.8k",
      category: "Service Guide"
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
            Latest from Our Blog
          </h1>
          <p className="text-xl text-tech-100">
            Stay updated with the latest tech news, repair guides, and maintenance tips
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-tech-900/50 backdrop-blur-sm border border-tech-700 rounded-xl overflow-hidden group hover:border-tech-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-tech-500/90 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-tech-300 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span>{post.views}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-tech-100 group-hover:text-tech-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-tech-200 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-tech-300 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="text-tech-400 font-semibold flex items-center group/btn hover:text-tech-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button 
            onClick={() => navigate('/blog')}
            className="bg-tech-500 text-white px-8 py-4 rounded-xl hover:bg-tech-600 transition-all flex items-center mx-auto group shadow-lg shadow-tech-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;