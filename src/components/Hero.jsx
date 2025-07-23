import React, { useRef, useState, useEffect } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";

function InteractiveSphere({ mousePosition }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (meshRef.current) {
      targetRotation.current.x = (mousePosition.y - 0.5) * Math.PI * 0.3;
      targetRotation.current.y = (mousePosition.x - 0.5) * Math.PI * 0.3;
      
      const factor = 0.05;
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * factor;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * factor;
      
      meshRef.current.rotation.x = currentRotation.current.x;
      meshRef.current.rotation.y = currentRotation.current.y;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      
      const targetScale = hovered ? 1.15 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={[0, 0, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial
        color={hovered ? "#c19cff" : "#8B5CF6"}
        wireframe={true}
        transparent={true}
        opacity={hovered ? 0.9 : 0.8}
      />
    </mesh>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [canvasLoaded, setCanvasLoaded] = useState(false); // NEW
  const containerRef = useRef(null);
  

  useEffect(() => {
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
          y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  

  return (
    <>
      <section 
        ref={containerRef}
        className="w-full min-h-screen bg-gradient-to-br from-[#1c1624] to-[#0b0c10] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10 relative">
          <div className="flex-1 z-10">
            <div className="bg-white text-black px-6 py-3 mb-6 w-fit">
              <h2 className="text-8xl font-bold">FORTEAI</h2>
            </div>
            <h1 className="text-6xl md:text-4xl font-bold leading-tight">
              Developing  <span className="text-[#c19cff]">AI powered products</span><br /> and solutions to customers
              Intelligence
            </h1>
            <p className="text-lg text-gray-300 mt-6 max-w-md">
              ForteAI helps you identify top talent with ethical, data-driven precision.
            </p>
            <button
              className="mt-8 px-8 py-4 bg-[#a573ff] hover:bg-[#915aff] rounded-full text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => {
                const demoSection = document.getElementById("demo");
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              ForteHR
            </button>
          </div>

          <div className="flex-1 h-[500px] md:h-[600px] relative min-h-[400px]">
            {!canvasLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-[#110F15] bg-opacity-60">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#a573ff] border-opacity-50"></div>
              </div>
            )}
            <Canvas
              camera={{ position: [0, 0, 4], fov: 50 }}
              style={{ background: 'transparent', minHeight: 400 }}
              onCreated={() => setCanvasLoaded(true)} // NEW
            >
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={0.5} />
              <InteractiveSphere mousePosition={mousePos} />
            </Canvas>
            
            <div 
              className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-purple-400/10 to-transparent blur-3xl transition-all duration-500 ease-out"
              style={{
                transform: `translate(${(mousePos.x - 0.5) * 100}px, ${(mousePos.y - 0.5) * 100}px)`,
              }}
            />
            
            <div className="absolute bottom-4 right-4 text-xs text-purple-300/70 animate-pulse">
              Move cursor to control sphere
            </div>
          </div>
        </div>
      </section>
    </>
  );
}