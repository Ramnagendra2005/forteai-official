import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 150, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#c19cff" },
    links: {
      color: "#8B5CF6",
      distance: 180,
      enable: true,
      opacity: 0.4,
      width: 2,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 2.5,
      straight: false,
    },
    number: {
      density: { enable: true },
      value: 80,
    },
    opacity: {
      value: { min: 0.3, max: 0.8 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    shape: { type: "circle" },
    size: {
      value: { min: 2, max: 6 },
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

const GlobalStyles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default GlobalStyles; 