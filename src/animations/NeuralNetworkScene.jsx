import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralParticles() {
  const pointsRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  // Generate particle positions
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotate particles
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
    
    // Mouse interaction
    pointsRef.current.rotation.x += mousePos.current.y * 0.0005;
    pointsRef.current.rotation.y += mousePos.current.x * 0.0005;

    // Animate individual particles
    const positions = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] = Math.sin(time + positions[i]) * 0.5;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D9FF"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ConnectionLines() {
  const linesRef = useRef();

  useFrame((state) => {
    if (!linesRef.current) return;
    const time = state.clock.getElapsedTime();
    linesRef.current.rotation.y = time * 0.03;
  });

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const lineCount = 50;
    const positions = new Float32Array(lineCount * 6);

    for (let i = 0; i < lineCount; i++) {
      const startX = (Math.random() - 0.5) * 8;
      const startY = (Math.random() - 0.5) * 8;
      const startZ = (Math.random() - 0.5) * 8;
      
      const endX = startX + (Math.random() - 0.5) * 2;
      const endY = startY + (Math.random() - 0.5) * 2;
      const endZ = startZ + (Math.random() - 0.5) * 2;

      positions[i * 6] = startX;
      positions[i * 6 + 1] = startY;
      positions[i * 6 + 2] = startZ;
      positions[i * 6 + 3] = endX;
      positions[i * 6 + 4] = endY;
      positions[i * 6 + 5] = endZ;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial color="#00D9FF" transparent opacity={0.3} />
    </lineSegments>
  );
}

export default function NeuralNetworkScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <NeuralParticles />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
