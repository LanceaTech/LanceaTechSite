import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MatrixColumn({ x, speed, delay }) {
  const meshRefs = useRef([]);
  const chars = useMemo(() => '01{}[]()<>=+-*/%&|!@#$'.split(''), []);
  const charMeshes = useMemo(() => chars.map(() => Math.random()), [chars]);

  useFrame((state) => {
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const time = state.clock.getElapsedTime();
        mesh.position.y = ((time * speed + delay + i * 0.5) % 15) - 7.5;
        mesh.material.opacity = 1 - Math.abs(mesh.position.y) / 7.5;
      }
    });
  });

  return (
    <group position={[x, 0, 0]}>
      {charMeshes.map((randomVal, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
        >
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial 
            color="#10B981" 
            transparent 
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function MatrixRain() {
  const columns = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      x: (i - 20) * 0.5,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <>
      {columns.map((col, i) => (
        <MatrixColumn key={i} {...col} />
      ))}
    </>
  );
}

export default function CodeMatrixScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <MatrixRain />
      </Canvas>
    </div>
  );
}
