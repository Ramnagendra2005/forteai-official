import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-6 mt-15 md:px-12 lg:px-24 bg-[#110F15] text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-[#9B5DE5]">Us</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#CCCCCC] leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-white font-semibold">ForteAI</span> is an
          <span className="text-[#9B5DE5] font-semibold"> AI-first technology company </span>
          focused on building ethical, transparent, and intelligent
          <span className="text-white font-semibold"> AI-powered products and solutions </span>
          for forward-thinking businesses.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-[#CCCCCC] leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our mission is to help organizations solve real-world challenges using
          <span className="text-[#9B5DE5] font-semibold"> explainable, customizable AI </span>
          that enhances efficiency, decision-making, and innovation. We deliver
          <span className="text-white font-semibold"> intelligent tools </span>
          through
          <span className="text-[#9B5DE5] font-semibold"> data-driven automation and insights </span>
          across diverse sectors.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-[#CCCCCC] leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          With a strong foundation in
          <span className="text-[#9B5DE5] font-semibold"> ethics, privacy, and continuous learning</span>,
          <span className="text-white font-semibold"> ForteAI transforms complexity </span>
          into
          <span className="text-[#9B5DE5] font-semibold"> actionable intelligence </span>—
          enabling businesses to thrive in an AI-powered future.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
<div id="features">
  {/* Features content */}
</div>
