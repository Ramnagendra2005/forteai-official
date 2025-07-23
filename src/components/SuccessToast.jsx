import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const SuccessToast = ({ setShowToast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 bg-[#2e2e38] border border-[#3d3d47] rounded-lg p-4 shadow-lg z-50 flex items-center"
    >
      <div className="mr-3 text-green-500">
        <FiCheckCircle size={24} />
      </div>
      <div>
        <h4 className="font-bold">Message Sent!</h4>
        <p className="text-sm text-[#c9c9c9]">We'll get back to you soon.</p>
      </div>
      <button 
        onClick={() => setShowToast(false)}
        className="ml-4 text-[#a0a0a0] hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </motion.div>
  );
};

export default SuccessToast;