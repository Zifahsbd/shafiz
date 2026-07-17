import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.08
    // mouse parallax
    const { x, y } = state.pointer
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y * 0.25, 0.05)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -x * 0.15, 0.05)
  })
  return <group ref={group}>{children}</group>
}

function CenterBlob() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.25
  })
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.7}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.45}
          speed={2.2}
          roughness={0.2}
          metalness={0.45}
          emissive="#5b21b6"
          emissiveIntensity={0.7}
        />
      </mesh>
    </Float>
  )
}

function Shape({
  position,
  color,
  kind,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number]
  color: string
  kind: 'torus' | 'icosa' | 'knot' | 'octa' | 'capsule'
  scale?: number
  speed?: number
}) {
  return (
    <Float speed={1.4 * speed} rotationIntensity={1.6} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        {kind === 'torus' && <torusGeometry args={[0.55, 0.22, 32, 64]} />}
        {kind === 'icosa' && <icosahedronGeometry args={[0.55, 0]} />}
        {kind === 'knot' && <torusKnotGeometry args={[0.4, 0.13, 128, 24]} />}
        {kind === 'octa' && <octahedronGeometry args={[0.6, 0]} />}
        {kind === 'capsule' && <capsuleGeometry args={[0.28, 0.6, 8, 24]} />}
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.55} emissive={color} emissiveIntensity={0.18} />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 46 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute !inset-0"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 4, 6]} intensity={60} color="#22d3ee" />
      <pointLight position={[-6, -3, 4]} intensity={60} color="#ff2e9a" />
      <pointLight position={[0, 6, -4]} intensity={40} color="#facc15" />
      <directionalLight position={[0, 4, 8]} intensity={1.2} color="#ffffff" />
      <Rig>
        <CenterBlob />
        <Shape position={[-3.4, 1.3, -0.5]} color="#ff2e9a" kind="torus" scale={1.1} speed={1.1} />
        <Shape position={[3.4, -1.2, -0.6]} color="#22d3ee" kind="knot" speed={0.9} />
        <Shape position={[2.9, 1.9, -1.4]} color="#facc15" kind="icosa" scale={0.9} speed={1.3} />
        <Shape position={[-2.8, -1.9, -1.0]} color="#a3e635" kind="octa" scale={0.8} speed={1.2} />
        <Shape position={[0.4, 2.8, -2.2]} color="#fb923c" kind="capsule" scale={0.9} speed={0.8} />
        <Shape position={[-0.6, -3.0, -2.0]} color="#8b5cf6" kind="icosa" scale={0.7} speed={1.4} />
        <Sparkles count={90} scale={[14, 9, 6]} size={3} speed={0.35} color="#ffffff" opacity={0.7} />
      </Rig>
    </Canvas>
  )
}
