import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="text-white font-sans">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}