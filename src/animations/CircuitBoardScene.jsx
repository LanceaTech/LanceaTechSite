import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CircuitTraces() {
  const linesRef = useRef();
  const pulseRef = useRef(0);

  const { geometry, colors, pulseSpeeds } = useMemo(() => {
    const lineCount = 80;
    const positions = [];
    const colorsArray = [];
    const speeds = [];

    for (let i = 0; i < lineCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      const position = (Math.random() - 0.5) * 20;
      const length = Math.random() * 10 + 5;
      
      if (isHorizontal) {
        positions.push(-10, position, 0, length, position, 0);
      } else {
        positions.push(position, -10, 0, position, length, 0);
      }

      // Alternate between orange and silver
      const color = Math.random() > 0.5 ? 
        new THREE.Color('#F59E0B') : 
        new THREE.Color('#E8EEF2');
      
      colorsArray.push(color.r, color.g, color.b, color.r, color.g, color.b);
      speeds.push(Math.random() * 0.5 + 0.5);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colorsArray, 3));

    return { geometry: geo, colors: colorsArray, pulseSpeeds: speeds };
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    
    pulseRef.current += 0.01;
    
    // Create pulsing effect
    const time = state.clock.getElapsedTime();
    linesRef.current.material.opacity = 0.3 + Math.sin(time * 2) * 0.2;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial 
        vertexColors 
        transparent 
        opacity={0.4}
        linewidth={2}
      />
    </lineSegments>
  );
}

function SignalPulses() {
  const pulsesRef = useRef();

  useFrame((state) => {
    if (!pulsesRef.current) return;
    const time = state.clock.getElapsedTime();
    pulsesRef.current.rotation.z = time * 0.1;
  });

  const pulseGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const pulseCount = 20;
    const positions = [];
    const sizes = [];

    for (let i = 0; i < pulseCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        0
      );
      sizes.push(Math.random() * 0.3 + 0.1);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    
    return geometry;
  }, []);

  return (
    <points ref={pulsesRef} geometry={pulseGeometry}>
      <pointsMaterial
        color="#F59E0B"
        size={0.2}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function CircuitBoardScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <CircuitTraces />
        <SignalPulses />
      </Canvas>
    </div>
  );
}
