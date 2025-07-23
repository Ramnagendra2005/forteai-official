import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Demo from './Demo';
import Testimonials from './Testimonials';
import Contact from './Contact';
import SuccessToast from './SuccessToast';

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div id="home">
      <Hero />
      <About />
      <Features />
      <Demo />
      <Testimonials />
      <Contact setShowToast={setShowToast} />
      
      <AnimatePresence>
        {showToast && <SuccessToast setShowToast={setShowToast} />}
      </AnimatePresence>
    </div>
  );
}