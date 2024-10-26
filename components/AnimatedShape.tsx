'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { gsap } from 'gsap'
import { Button } from "@/components/ui/button"
import { Square, Circle, Disc, Triangle, Octagon, Pentagon, Paintbrush } from 'lucide-react'
import * as THREE from 'three'

type ShapeType = 'cube' | 'sphere' | 'torus' | 'cone' | 'octahedron' | 'dodecahedron'
type TextureType = 'standard' | 'wireframe' | 'normal' | 'phong'

function Shape({ shape, texture }: { shape: ShapeType; texture: TextureType }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()
  const [isAnimating, setIsAnimating] = useState(true)
  const [currentShape, setCurrentShape] = useState<ShapeType>(shape)

  useEffect(() => {
    const mesh = meshRef.current
    if (mesh) {
      const rotationAnimation = gsap.to(mesh.rotation, {
        y: Math.PI * 2,
        duration: 5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        paused: true
      })

      const positionAnimation = gsap.to(mesh.position, {
        y: 0.5,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        paused: true
      })

      if (isAnimating) {
        rotationAnimation.play()
        positionAnimation.play()
      } else {
        rotationAnimation.pause()
        positionAnimation.pause()
      }

      return () => {
        rotationAnimation.kill()
        positionAnimation.kill()
      }
    }
  }, [isAnimating])

  useEffect(() => {
    const mesh = meshRef.current
    if (mesh) {
      const originalScale = mesh.scale.clone()

      const tl = gsap.timeline()

      tl.to(mesh.scale, {
        x: 0.1,
        y: 0.1,
        z: 0.1,
        duration: 0.5,
        ease: 'power2.in'
      })
      .to(mesh.rotation, {
        x: Math.PI,
        y: Math.PI,
        duration: 0.5,
        ease: 'power2.in'
      }, '<')
      .call(() => setCurrentShape(shape))
      .to(mesh.scale, {
        x: originalScale.x,
        y: originalScale.y,
        z: originalScale.z,
        duration: 0.5,
        ease: 'power2.out'
      })
      .to(mesh.rotation, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, '<')
    }
  }, [shape])

  useFrame(() => {
    const mesh = meshRef.current
    if (mesh) {
      const scale = Math.min(1, viewport.width / 5)
      mesh.scale.set(scale, scale, scale)
    }
  })

  const handleClick = () => {
    setIsAnimating(!isAnimating)
  }

  const getMaterial = () => {
    switch (texture) {
      case 'wireframe':
        return <meshBasicMaterial wireframe color="#C0C0C0" />
      case 'normal':
        return <meshNormalMaterial />
      case 'phong':
        return <meshPhongMaterial color="#C0C0C0" shininess={100} />
      default:
        return (
          <meshStandardMaterial
            color="#C0C0C0"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1}
          />
        )
    }
  }

  return (
    <mesh ref={meshRef} onClick={handleClick}>
      {currentShape === 'cube' && <boxGeometry args={[1, 1, 1]} />}
      {currentShape === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
      {currentShape === 'torus' && <torusGeometry args={[0.3, 0.2, 16, 100]} />}
      {currentShape === 'cone' && <coneGeometry args={[0.5, 1, 32]} />}
      {currentShape === 'octahedron' && <octahedronGeometry args={[0.5]} />}
      {currentShape === 'dodecahedron' && <dodecahedronGeometry args={[0.5]} />}
      {getMaterial()}
    </mesh>
  )
}

function FloatingMenu({ setShape, setTexture }: { setShape: (shape: ShapeType) => void; setTexture: (texture: TextureType) => void }) {
  return (
    <div className="absolute top-4 left-4 p-2 rounded-lg shadow-lg backdrop-blur-sm">
      <div className="grid grid-cols-3 gap-2 mb-2">
        <Button variant="outline" size="icon" onClick={() => setShape('cube')} aria-label="Change to cube">
          <Square className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setShape('sphere')} aria-label="Change to sphere">
          <Circle className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setShape('torus')} aria-label="Change to torus">
          <Disc className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setShape('cone')} aria-label="Change to cone">
          <Triangle className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setShape('octahedron')} aria-label="Change to octahedron">
          <Octagon className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setShape('dodecahedron')} aria-label="Change to dodecahedron">
          <Pentagon className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" onClick={() => setTexture('standard')} aria-label="Change to standard texture">
          <Paintbrush className="h-4 w-4 mr-2" />
          Standard
        </Button>
        <Button variant="outline" size="sm" onClick={() => setTexture('wireframe')} aria-label="Change to wireframe texture">
          <Paintbrush className="h-4 w-4 mr-2" />
          Wireframe
        </Button>
        <Button variant="outline" size="sm" onClick={() => setTexture('normal')} aria-label="Change to normal texture">
          <Paintbrush className="h-4 w-4 mr-2" />
          Normal
        </Button>
        <Button variant="outline" size="sm" onClick={() => setTexture('phong')} aria-label="Change to phong texture">
          <Paintbrush className="h-4 w-4 mr-2" />
          Phong
        </Button>
      </div>
    </div>
  )
}

export default function Animated3dShape() {
  const [currentShape, setCurrentShape] = useState<ShapeType>('cube')
  const [currentTexture, setCurrentTexture] = useState<TextureType>('standard')

  return (
    <div className="w-full h-[calc(100vh-88px)] bg-gradient-to-b from-gray-900 to-black relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Shape shape={currentShape} texture={currentTexture} />
      </Canvas>
      <FloatingMenu setShape={setCurrentShape} setTexture={setCurrentTexture} />
    </div>
  )
}