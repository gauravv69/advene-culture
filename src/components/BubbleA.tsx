import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Text3D,
  Center,
  Environment,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useRef, useState } from "react";

function AnimatedText() {
  const matRef = useRef<any>();

  const time = useRef(0);
  const delay = 1.2; // 👈 delay before fade starts

  useFrame((_, delta) => {
    if (!matRef.current) return;

    time.current += delta;

    // wait for delay
    if (time.current < delay) return;

    // fade in slowly
    const fadeProgress = (time.current - delay) * 0.5;

    matRef.current.opacity = Math.min(fadeProgress, 1);
  });

  return (
    <Center position={[0, 0, -2]}>
      <Text3D
        font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
        size={1.5}
        height={0.1}
      >
        Advene Culture
        <meshStandardMaterial
          ref={matRef}
          color="white"
          transparent
          opacity={0}
        />
      </Text3D>
    </Center>
  );
}

/* 👉 Intro + Drag Rotation */
function DragRotate({ children }: any) {
  const ref = useRef<any>();
  const [dragging, setDragging] = useState(false);
  const lastX = useRef(0);

  /* 👉 intro animation state */
  const introDone = useRef(false);
  const introTime = useRef(0);

  useFrame((_, delta) => {
    if (!ref.current) return;

    /* INTRO EFFECT */
    if (!introDone.current) {
      introTime.current += delta * 0.25;

      // rotate in from side
      ref.current.rotation.y = -0.8 + introTime.current * 0.8;

      // scale in
      const s = 0.7 + introTime.current * 0.3;
      ref.current.scale.set(s, s, s);

      if (introTime.current >= 1) {
        introDone.current = true;
        ref.current.rotation.y = 0;
        ref.current.scale.set(1, 1, 1);
      }
    }
  });

  /* 👉 DRAG ROTATION */
  const handlePointerDown = (e: any) => {
    setDragging(true);
    lastX.current = e.clientX;
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handlePointerMove = (e: any) => {
    if (!dragging || !ref.current) return;

    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;

    ref.current.rotation.y += delta * 0.02;
  };

  return (
    <group
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerUp}
    >
      {children}
    </group>
  );
}

export default function BubbleA() {
  return (
    <div className="absolute inset-0">
      <Canvas shadows camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={2} />

        <Environment preset="studio" />

        <AnimatedText />

        {/* GLASS A */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <DragRotate>
            <Center>
              <Text3D
                font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
                size={3.2}
                height={1}
                curveSegments={128}
              >
                A
                <MeshTransmissionMaterial
                  transmission={1}
                  thickness={2.5}
                  roughness={0}
                  ior={1.6}
                  chromaticAberration={0.3}
                  anisotropy={0.3}
                  distortion={0.15}
                  distortionScale={0.4}
                  temporalDistortion={0.25}
                />
              </Text3D>
            </Center>
          </DragRotate>
        </Float>

        {/* Shadow */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2.2, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.15} />
        </mesh>
      </Canvas>
    </div>
  );
}
