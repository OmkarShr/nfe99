import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorksPreview from '../components/HowItWorksPreview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorksPreview />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;