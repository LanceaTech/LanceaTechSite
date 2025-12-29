import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ConvergingStreams() {
  const pointsRef = useRef();
  const streamCount = 8; // Number of energy streams
  const particlesPerStream = 400;
  const totalParticles = streamCount * particlesPerStream;
  
  const { positions, streamPositions, randomPositions } = useMemo(() => {
    const pos = new Float32Array(totalParticles * 3);
    const streamPos = new Float32Array(totalParticles * 3);
    const randPos = new Float32Array(totalParticles * 3);
    
    for (let s = 0; s < streamCount; s++) {
      // Each stream comes from a different angle around the center
      const angle = (s / streamCount) * Math.PI * 2;
      
      for (let p = 0; p < particlesPerStream; p++) {
        const i = s * particlesPerStream + p;
        const i3 = i * 3;
        
        // Random scattered starting positions (far away)
        randPos[i3] = (Math.random() - 0.5) * 60;
        randPos[i3 + 1] = (Math.random() - 0.5) * 50;
        randPos[i3 + 2] = (Math.random() - 0.5) * 30;
        
        // Stream positions - from far out to center
        const t = p / particlesPerStream; // 0 to 1 along the stream
        const distance = (1 - t) * 35; // Start 35 units away, converge to 0
        
        // Add some randomness to stream width
        const spreadAngle = angle + (Math.random() - 0.5) * 0.3;
        const spread = (1 - t) * (Math.random() * 1.5); // Wider at edges
        
        streamPos[i3] = Math.cos(spreadAngle) * (distance + spread);
        streamPos[i3 + 1] = Math.sin(spreadAngle) * (distance + spread);
        streamPos[i3 + 2] = (Math.random() - 0.5) * 3 * (1 - t); // Depth variation
        
        // Start scattered
        pos[i3] = randPos[i3];
        pos[i3 + 1] = randPos[i3 + 1];
        pos[i3 + 2] = randPos[i3 + 2];
      }
    }
    
    return { positions: pos, streamPositions: streamPos, randomPositions: randPos };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array;
    
    // Cycle: 0-2s gather, 2-6s streaming, 6-8s disperse
    const cycle = time % 8;
    
    if (cycle < 2) {
      // GATHERING - particles rush inward
      const progress = cycle / 2;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Fast acceleration
      
      for (let i = 0; i < totalParticles; i++) {
        const i3 = i * 3;
        
        positions[i3] = THREE.MathUtils.lerp(
          randomPositions[i3],
          streamPositions[i3],
          easeProgress
        );
        positions[i3 + 1] = THREE.MathUtils.lerp(
          randomPositions[i3 + 1],
          streamPositions[i3 + 1],
          easeProgress
        );
        positions[i3 + 2] = THREE.MathUtils.lerp(
          randomPositions[i3 + 2],
          streamPositions[i3 + 2],
          easeProgress
        );
      }
      
    } else if (cycle < 6) {
      // STREAMING - flowing energy towards center
      const flowSpeed = time * 3;
      
      for (let i = 0; i < totalParticles; i++) {
        const i3 = i * 3;
        
        // Calculate distance from center
        const dx = streamPositions[i3];
        const dy = streamPositions[i3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Flowing motion - particles move along the stream
        const flowPhase = (flowSpeed + i * 0.02) % (Math.PI * 2);
        const flowOffset = Math.sin(flowPhase) * 0.8;
        
        // Direction towards center
        const dirX = distance > 0 ? -dx / distance : 0;
        const dirY = distance > 0 ? -dy / distance : 0;
        
        positions[i3] = streamPositions[i3] + dirX * flowOffset;
        positions[i3 + 1] = streamPositions[i3 + 1] + dirY * flowOffset;
        positions[i3 + 2] = streamPositions[i3 + 2];
      }
      
    } else {
      // DISPERSING - explosive burst
      const progress = (cycle - 6) / 2;
      const easeProgress = progress * progress;
      const explosion = progress * 30;
      
      for (let i = 0; i < totalParticles; i++) {
        const i3 = i * 3;
        
        // Push outward from center
        const angle = Math.atan2(streamPositions[i3 + 1], streamPositions[i3]);
        
        positions[i3] = THREE.MathUtils.lerp(
          streamPositions[i3],
          randomPositions[i3] + Math.cos(angle) * explosion,
          easeProgress
        );
        positions[i3 + 1] = THREE.MathUtils.lerp(
          streamPositions[i3 + 1],
          randomPositions[i3 + 1] + Math.sin(angle) * explosion,
          easeProgress
        );
        positions[i3 + 2] = THREE.MathUtils.lerp(
          streamPositions[i3 + 2],
          randomPositions[i3 + 2],
          easeProgress
        );
      }
    }
    
    // Very subtle rotation
    pointsRef.current.rotation.z = time * 0.05;
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D9FF"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.9}
      />
    </Points>
  );
}

function ConvergenceCore() {
  const coreRef = useRef();
  const ringsRef = useRef([]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const cycle = time % 8;
    
    if (coreRef.current) {
      // Bright pulsing core - visible and prominent
      let intensity = 0.6;
      if (cycle > 2 && cycle < 6) {
        intensity = 0.8 + Math.sin(time * 4) * 0.2;
      }
      
      coreRef.current.material.opacity = intensity;
      coreRef.current.scale.setScalar(0.3 + Math.sin(time * 3) * 0.1);
    }
    
    // Pulse rings outward
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        const offset = i * 0.5;
        const pulseSize = 1 + ((time + offset) % 2) * 2;
        const pulseOpacity = 1 - ((time + offset) % 2) / 2;
        
        ring.scale.setScalar(pulseSize);
        ring.material.opacity = pulseOpacity * 0.3;
      }
    });
  });
  
  return (
    <>
      {/* Bright central point */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color="#00D9FF"
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Pulsing rings */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          position={[0, 0, 0]}
        >
          <ringGeometry args={[0.5, 0.6, 32]} />
          <meshBasicMaterial
            color="#00D9FF"
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
      
      {/* Bright glow halo */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial
          color="#00D9FF"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

export default function ParticleSpearEffect() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 10]} intensity={3} color="#00D9FF" />
        
        <ConvergenceCore />
        <ConvergingStreams />
      </Canvas>
    </div>
  );
}