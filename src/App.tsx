import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Modal from './components/Modal';
import DeviceSelection from './components/DeviceSelection';
import PageBanner from './components/PageBanner';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';

const AnimatedRoutes = ({ onRepairClick }: { onRepairClick: () => void }) => {
  const location = useLocation();
  
  const getBannerProps = (pathname: string) => {
    switch (pathname) {
      case '/about':
        return { title: 'About Us', subtitle: 'Leading the future of device repair technology' };
      case '/services':
        return { title: 'Our Services', subtitle: 'Professional repair solutions for all your devices' };
      case '/blog':
        return { title: 'Tech Blog', subtitle: 'Latest insights from our repair experts' };
      case '/contact':
        return { title: 'Contact Us', subtitle: '24/7 support for all your repair needs' };
      case '/terms':
        return { title: 'Terms of Service', subtitle: 'Understand our service terms and conditions' };
      case '/privacy':
        return { title: 'Privacy Policy', subtitle: 'Learn about our data handling practices' };
      case '/sitemap':
        return { title: 'Sitemap', subtitle: 'Overview of all our website pages' };
      default:
        return null;
    }
  };

  const bannerProps = getBannerProps(location.pathname);

  return (
    <>
      {bannerProps && <PageBanner {...bannerProps} />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onRepairClick={onRepairClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeviceSelectionComplete = (data: {
    device: string;
    model: string;
    issues: string[];
    phoneNumber: string;
  }) => {
    console.log('Device selection completed:', data);
    setIsModalOpen(false);
  };

  const handleRepairClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-tech-50">
        <Navbar onRepairClick={handleRepairClick} />
        <main className="flex-grow">
          <AnimatedRoutes onRepairClick={handleRepairClick} />
        </main>
        <Footer />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <DeviceSelection onComplete={handleDeviceSelectionComplete} />
        </Modal>
      </div>
    </Router>
  );
}

export default App;