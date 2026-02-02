import { Canvas } from "@react-three/fiber";
import {
  Float,
  Text3D,
  Center,
  Environment,
  MeshTransmissionMaterial,
} from "@react-three/drei";

export default function BubbleA() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Lights */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} />

        <Environment preset="city" />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          {/* THIS centers the geometry */}
          <Center>
            <Text3D
              font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
              size={2.5}
              height={0.6}
              curveSegments={64}
            >
              A
              <MeshTransmissionMaterial
                thickness={1.5}
                roughness={0}
                transmission={1}
                ior={1.6}
                chromaticAberration={0.1}
                backside
              />
            </Text3D>
          </Center>
        </Float>
      </Canvas>
    </div>
  );
}
