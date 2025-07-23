import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ball from '../assets/Ball.png';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#262730]/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={ball} alt="Ball" className="h-9 mr-2" />
          <img src={logo} alt="ForteAI Logo" className="h-7" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="text-white hover:text-[#9b5de5] transition-colors duration-300 font-medium bg-transparent border-none outline-none cursor-pointer"
              onClick={() => {
                if (window.location.pathname === "/") {
                  const sectionId = item.name === "Home" ? "home" : item.href.replace('/', '');
                  const section = document.getElementById(sectionId);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                } else {
                  window.location.href = item.name === "Home" ? "/#home" : `/#${item.href.replace('/', '')}`;
                }
              }}
            >
              {item.name}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#9b5de5] hover:bg-[#7d3fd1] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-[#9b5de5]/50"
            onClick={() => {
              if (window.location.pathname === "/") {
                const demoSection = document.getElementById("demo");
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: "smooth" });
                }
              } else {
                window.location.href = "/#demo";
              }
            }}
          >
            See Our Product
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#262730] py-4 px-6"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-[#9b5de5] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#9b5de5] hover:bg-[#7d3fd1] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 w-full"
            >
              See Our Product
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
