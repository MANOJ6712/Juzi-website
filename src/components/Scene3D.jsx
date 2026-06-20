import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FruitSphere({ position, color, scale = 1, speed = 1, distort = 0.4 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3
      meshRef.current.rotation.y += 0.005 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.1}
          distort={distort}
          speed={2}
          envMapIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

function OrangeSlice({ position, scale = 1 }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh>
          <cylinderGeometry args={[1.2, 1.2, 0.15, 32, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#FF8C00" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.01, 0]}>
          <cylinderGeometry args={[1.1, 1.1, 0.12, 32, 1, false, 0, Math.PI]} />
          <meshStandardMaterial color="#FFA500" roughness={0.4} />
        </mesh>
        {[...Array(6)].map((_, i) => (
          <mesh key={i} rotation={[0, (i * Math.PI) / 6 + Math.PI / 12, 0]} position={[0, 0.02, 0]}>
            <boxGeometry args={[0.03, 0.14, 1]} />
            <meshStandardMaterial color="#FFD700" opacity={0.6} transparent />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

function JuiceBottle({ position, color, scale = 1 }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.45, 2, 32]} />
          <meshStandardMaterial color={color} roughness={0.1} metalness={0.3} transparent opacity={0.85} />
        </mesh>
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.2, 0.35, 0.4, 32]} />
          <meshStandardMaterial color={color} roughness={0.1} metalness={0.3} transparent opacity={0.85} />
        </mesh>
        <mesh position={[0, 1.4, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 0.3, 32]} />
          <meshStandardMaterial color="#E0E0E0" roughness={0.3} metalness={0.5} />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingParticles({ count = 100 }) {
  const points = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [count])

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3)
    const colorOptions = [
      new THREE.Color('#FF6B35'),
      new THREE.Color('#FFD166'),
      new THREE.Color('#2EC4B6'),
      new THREE.Color('#FF9800'),
      new THREE.Color('#E91E63'),
    ]
    for (let i = 0; i < count; i++) {
      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      cols[i * 3] = c.r
      cols[i * 3 + 1] = c.g
      cols[i * 3 + 2] = c.b
    }
    return cols
  }, [count])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.0005
      points.current.rotation.x += 0.0002
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function Leaf({ position, scale = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.4
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#4CAF50" roughness={0.6} flatShading />
      </mesh>
    </Float>
  )
}

function SceneContent({ currentPage }) {
  const fruits = useMemo(() => {
    const base = [
      { type: 'sphere', position: [-6, 2, -5], color: '#FF6B35', scale: 1.2, speed: 0.8, distort: 0.5 },
      { type: 'sphere', position: [7, -1, -8], color: '#FFD166', scale: 0.9, speed: 1.2, distort: 0.3 },
      { type: 'sphere', position: [-4, -3, -6], color: '#E91E63', scale: 0.7, speed: 1, distort: 0.4 },
      { type: 'sphere', position: [5, 3, -10], color: '#4CAF50', scale: 1.1, speed: 0.6, distort: 0.6 },
      { type: 'sphere', position: [-8, 0, -12], color: '#9C27B0', scale: 0.8, speed: 0.9, distort: 0.3 },
      { type: 'orange', position: [4, 1, -4], scale: 0.7 },
      { type: 'bottle', position: [-3, 0, -3], color: '#FF6B35', scale: 0.5 },
      { type: 'bottle', position: [6, -2, -7], color: '#4CAF50', scale: 0.4 },
      { type: 'leaf', position: [3, 4, -6], scale: 0.5 },
      { type: 'leaf', position: [-5, 3, -8], scale: 0.4 },
    ]

    if (currentPage === '/menu') {
      return [
        ...base,
        { type: 'sphere', position: [0, 5, -15], color: '#FF6B35', scale: 2, speed: 0.3, distort: 0.7 },
        { type: 'orange', position: [-6, -2, -5], scale: 0.9 },
        { type: 'bottle', position: [8, 1, -6], color: '#E91E63', scale: 0.6 },
      ]
    }
    return base
  }, [currentPage])

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FFE0C0" />
      <directionalLight position={[-10, -5, -5]} intensity={0.3} color="#2EC4B6" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#FF6B35" />
      <pointLight position={[-5, -3, 5]} intensity={0.3} color="#FFD166" />

      <Stars radius={50} depth={50} count={1500} factor={4} fade speed={1} />
      <FloatingParticles count={150} />

      {fruits.map((fruit, i) => {
        switch (fruit.type) {
          case 'sphere':
            return (
              <FruitSphere
                key={i}
                position={fruit.position}
                color={fruit.color}
                scale={fruit.scale}
                speed={fruit.speed}
                distort={fruit.distort}
              />
            )
          case 'orange':
            return <OrangeSlice key={i} position={fruit.position} scale={fruit.scale} />
          case 'bottle':
            return <JuiceBottle key={i} position={fruit.position} color={fruit.color} scale={fruit.scale} />
          case 'leaf':
            return <Leaf key={i} position={fruit.position} scale={fruit.scale} />
          default:
            return null
        }
      })}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  )
}

function WebGLFallback() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`,
            borderRadius: '50%',
            background: ['#FF6B35', '#FFD166', '#2EC4B6', '#4CAF50', '#E91E63'][i % 5],
            opacity: 0.08,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Scene3D({ currentPage }) {
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setWebglSupported(!!gl)
    } catch {
      setWebglSupported(false)
    }
  }, [])

  if (!webglSupported) return <WebGLFallback />

  return (
    <div className="canvas-container" style={{ pointerEvents: 'auto' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)' }}
        onError={() => setWebglSupported(false)}
      >
        <SceneContent currentPage={currentPage} />
      </Canvas>
    </div>
  )
}
