import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap } from 'lucide-react';
import forteHrPdf from '../assets/ForteHR_Intro.pdf';   

const Demo = () => {
  return (
    <div id="demo" className="w-full scroll-mt-24 min-h-screen bg-[#110F15] px-4 sm:px-10 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white text-center mb-4 select-none"
      >
        Our Product <span className="text-[#9b5de5]">ForteHR</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-[#CCCCCC] text-center mb-14 max-w-2xl mx-auto italic select-none"
      >
        <span className="text-white font-semibold">ForteHR</span> predicts attrition risks and empowers HR teams to take{" "}
        <span className="text-[#9b5de5] font-semibold">proactive actions</span> to retain talent and drive workforce engagement.
      </motion.p>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Box: About ForteHR */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-[#1f1f2e] hover:border-[#9b5de5] hover:shadow-[0_0_15px_#9b5de5] transition-all duration-300 rounded-2xl p-10 bg-[#181924] group relative"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-[#9b5de5] mr-4 shadow-lg">
                <FileText size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-semibold text-white select-text">About ForteHR</h3>
            </div>
           <p className="text-[#CCCCCC] leading-relaxed text-lg select-text">
  <span className="text-[#9b5de5] font-bold">ForteHR</span> leverages cutting-edge AI technologies including Deep Neural Networks, NLP, and Computer Vision to solve complex business problems. It specializes in predicting employee attrition risks and empowering HR teams with actionable insights to enhance retention and engagement.
</p>
<p className="mt-6 text-[#CCCCCC] leading-relaxed text-lg select-text">
  Attrition causes such as <span className="text-[#9b5de5] font-bold">lack of career growth</span>, low engagement, and inadequate benefits can lead to significant talent loss and increased costs. ForteHR's unique <span className="text-[#9b5de5] font-bold">3-dimensional PPP (Potential-Performance-Sentiment) analysis</span> identifies high potential and at-risk employees to enable proactive talent management.
</p>

          </motion.div>

          {/* Right Box: PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-[#1f1f2e] hover:border-[#9b5de5] hover:shadow-[0_0_15px_#9b5de5] transition-all duration-300 rounded-2xl p-4 bg-[#181924] group"
            style={{ height: '650px' }}
          >
            <div className="flex items-center mb-6 px-4 select-none">
              <Zap size={28} className="text-[#9b5de5] mr-3" />
              <h3 className="text-2xl font-semibold text-white">ForteHR Overview PDF</h3>
            </div>
            <iframe
              src={`${forteHrPdf}#toolbar=0&navpanes=0`}
              className="w-full h-[calc(100%_-_60px)] rounded-xl border border-[#1f1f2e]"
              title="ForteHR Introduction PDF"
              style={{ 
                border: 'none'
              }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Demo;