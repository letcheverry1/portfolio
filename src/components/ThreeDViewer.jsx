import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Environment, Float } from '@react-three/drei'; // Added Float for more life

function RotatingTorus() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]} scale={1.3}>
                <meshStandardMaterial
                    color="#5eead4"
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#5eead4"
                    emissiveIntensity={0.1}
                />
            </TorusKnot>
        </Float>
    );
}

export default function ThreeDViewer() {
    return (
        // Ajuste height para móvil (300px) y md (450px) para mejor proporción
        <div className="w-full max-w-[100vw] h-[300px] md:h-[450px] bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 shadow-inner relative">
            <div className="absolute top-4 left-4 z-10 text-xs font-mono text-teal-500/50">
                INTERACTIVE_VIEW
            </div>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
                <RotatingTorus />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}