import React from 'react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';
import CTA from '../components/CTA';
import Experts from '../components/Experts';
import Reviews from '../components/Reviews';

interface HomeProps {
  onRepairClick: () => void;
}

const Home = ({ onRepairClick }: HomeProps) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Hero onRepairClick={onRepairClick} />
      {/* <Brands /> */}
      <Process />
      <Features />
      <Stats />
      <Experts />
      <Reviews />
      {/* <Testimonials /> */}
      <CTA onRepairClick={onRepairClick} />
    </div>
  );
};

export default Home;