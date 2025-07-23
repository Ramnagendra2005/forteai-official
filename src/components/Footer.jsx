import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import ball from '../assets/Ball_logo.png'; // Import the ball logo

const Footer = () => {
  return (
    <footer className="py-12 bg-[#110F15]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6 md:mb-0"
          >
            <a href="/">
              <img
                src={ball}
                alt="ForteAI Ball Logo"
                className="h-12 w-50 mr-2 hover:scale-105 transition-transform duration-300"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            
            <a
              href="https://www.linkedin.com/company/forteai-technologies-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9c9c9] hover:text-[#9b5de5] transition-colors duration-300"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://github.com/ForteAI-Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9c9c9] hover:text-[#9b5de5] transition-colors duration-300"
            >
              <FiGithub size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#a0a0a0] text-sm"
          >
            © {new Date().getFullYear()} ForteAI. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
