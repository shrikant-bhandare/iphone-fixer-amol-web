import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  widthClass?: string; // Add this prop for custom width
}

const Modal = ({ isOpen, onClose, children, widthClass = "max-w-lg" }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="flex items-start justify-center min-h-screen px-4 pt-16 pb-20">
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 transition-opacity bg-gradient-to-br from-tech-950/90 to-tech-900/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div 
              className={`w-full ${widthClass} relative z-10`} // Adjusted width here
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-gradient-to-b from-tech-800 to-tech-900 rounded-2xl shadow-2xl shadow-tech-500/10 border border-tech-700/50">
                <div className="absolute inset-0 bg-tech-pattern opacity-5 rounded-2xl"></div>
                <div className="relative p-8">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-tech-800/50 text-tech-400 hover:text-tech-300 hover:bg-tech-700/50 transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;