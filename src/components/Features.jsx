import React, { useEffect, useRef, useState } from 'react';

// Simple icon components to replace lucide-react
const ShieldCheck = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12l2 2 4-4"/>
    <path d="M21 12c0 1-1 1-1 1s-1 0-1-1-1-4-9-4-9 3-9 4 0 1 1 1 1 0 1-1"/>
  </svg>
);

const Brain = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const BadgeCheck = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const Scale = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="M7 21h10"/>
    <path d="M12 3v18"/>
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
);

const SlidersHorizontal = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="21" x2="14" y1="4" y2="4"/>
    <line x1="10" x2="3" y1="4" y2="4"/>
    <line x1="21" x2="12" y1="12" y2="12"/>
    <line x1="8" x2="3" y1="12" y2="12"/>
    <line x1="21" x2="16" y1="20" y2="20"/>
    <line x1="12" x2="3" y1="20" y2="20"/>
    <line x1="14" x2="14" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="10" y2="14"/>
    <line x1="16" x2="16" y1="18" y2="22"/>
  </svg>
);

const Globe = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="m2 12 20 0"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const features = [
  {
    icon: <ShieldCheck size={40} className="text-[#9b5de5]" />,
    title: 'Secure by Design',
    desc: 'We prioritize your data with industry-leading security practices.',
  },
  {
    icon: <Brain size={40} className="text-[#9b5de5]" />,
    title: 'AI-Driven Insights',
    desc: 'Leverage machine learning for smart, actionable outcomes.',
  },
  {
    icon: <BadgeCheck size={40} className="text-[#9b5de5]" />,
    title: 'Verified Results',
    desc: 'Transparent and validated processes with measurable impact.',
  },
  {
    icon: <Scale size={40} className="text-[#9b5de5]" />,
    title: 'Ethical AI by Default',
    desc: 'Fairness, transparency, and privacy are embedded in everything we build.',
  },
  {
    icon: <SlidersHorizontal size={40} className="text-[#9b5de5]" />,
    title: 'Customizable Solutions',
    desc: 'Adaptable tools tailored to meet your specific business needs.',
  },
  {
    icon: <Globe size={40} className="text-[#9b5de5]" />,
    title: 'Cross-Industry Impact',
    desc: 'Our scalable AI products serve diverse sectors and challenges.',
  },
];

const InfiniteScrollFeatures = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const speed = 1.5; // pixels per frame
    const cardWidth = 380; // approximate width including gap
    const totalWidth = cardWidth * features.length;

    const animateScroll = () => {
      if (!paused && scrollContainer) {
        // Get current scroll position
        const currentScroll = scrollContainer.scrollLeft;
        
        // If we've scrolled past the first set, reset to beginning
        if (currentScroll >= totalWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = currentScroll + speed;
        }
      }
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [paused]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleTouchStart = () => setPaused(true);
  const handleTouchEnd = () => setPaused(false);

  return (
    <div id="features" className="w-full scroll-mt-24 bg-[#110F15] pt-20 mb-25 pb-20">
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .feature-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .feature-card:hover {
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(155, 93, 229, 0.4);
          }
          .feature-icon {
            transition: transform 0.2s ease;
          }
          .feature-card:hover .feature-icon {
            transform: scale(1.1);
          }
        `}
      </style>
      
      <div className="px-4 sm:px-10">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Why Choose <span className="text-[#9b5de5]">ForteAI</span>?
        </h2>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex gap-6 px-6 py-4 overflow-x-hidden scrollbar-hide"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Render multiple sets for seamless infinite scroll */}
        {[...Array(3)].map((_, setIndex) => 
          features.map((feature, index) => (
            <div
              key={`${setIndex}-${index}`}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] min-h-[260px] flex-shrink-0 border border-[#1f1f2e] hover:border-[#9b5de5] rounded-2xl p-8 sm:p-10 bg-[#181924] text-white feature-card cursor-pointer"
            >
              <div className="mb-4 feature-icon">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollFeatures;