import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";
import {
  FiSend,
  FiMail,
  FiUser,
  FiMessageSquare,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Contact = ({ setShowToast }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [state, handleSubmit] = useForm("meozarab");

  useEffect(() => {
    if (state.succeeded && setShowToast) {
      setShowToast(true);
    }
  }, [state.succeeded, setShowToast]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-20 bg-[#110F15] relative overflow-hidden scroll-mt-28"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#9B5DE5] mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-[#c9c9c9] max-w-2xl mx-auto">
              Ready to transform your hiring process? Contact our team today.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Info Card with Icons */}
            <div className="lg:w-[44%]">
              <div className="bg-[#2e2e38] rounded-xl p-6 border border-[#3d3d47] h-full text-[#c9c9c9] shadow-lg hover:shadow-[#9b5de5]/30 transition-shadow duration-300 space-y-6 flex flex-col items-start">
                <h3 className="text-xl font-bold text-left">Contact Information</h3>

                <div className="flex items-center gap-4 hover:text-[#9b5de5] transition">
                  <FiMail className="text-[#9b5de5] text-2xl" />
                  <span className="text-lg">forteaitechnologies@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 hover:text-[#9b5de5] transition">
                  <FiPhone className="text-[#9b5de5] text-2xl" />
                  <span className="text-lg">+91 90633 16737</span>
                </div>

                <div className="flex items-center gap-4 hover:text-[#9b5de5] transition">
                  <FiMapPin className="text-[#9b5de5] text-2xl" />
                  <span className="text-lg">Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Contact Form with Icons */}
            <div className="lg:w-[56%]">
              <form
                onSubmit={handleSubmit}
                className="bg-[#2e2e38] rounded-xl p-6 border border-[#3d3d47] shadow-lg"
                noValidate
              >
                {/* Name */}
                <label
                  htmlFor="name"
                  className="block mb-2 text-[#c9c9c9] font-medium"
                >
                  Your Name *
                </label>
                <div className="relative mb-4">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9b5de5]" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="pl-10 w-full bg-[#262730] border border-[#3d3d47] rounded-lg px-3 py-2 text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#9b5de5] hover:border-[#9b5de5]"
                  />
                </div>

                {/* Email */}
                <label
                  htmlFor="email"
                  className="block mb-2 text-[#c9c9c9] font-medium"
                >
                  Email Address *
                </label>
                <div className="relative mb-4">
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9b5de5]" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="pl-10 w-full bg-[#262730] border border-[#3d3d47] rounded-lg px-3 py-2 text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#9b5de5] hover:border-[#9b5de5]"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                {/* Message */}
                <label
                  htmlFor="message"
                  className="block mb-2 text-[#c9c9c9] font-medium"
                >
                  Your Message *
                </label>
                <div className="relative mb-6">
                  <FiMessageSquare className="absolute left-4 top-4 text-[#9b5de5]" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="pl-10 pt-2 w-full bg-[#262730] border border-[#3d3d47] rounded-lg px-3 py-2 text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#9b5de5] hover:border-[#9b5de5]"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    state.submitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#9b5de5] hover:bg-[#7d3fd1]"
                  }`}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && <FiSend className="text-lg" />}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
