"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { type InstancedMesh, Object3D } from "three"

export function PepperoniParticles({ count = 50 }: { count?: number }) {
  const meshRef = useRef<InstancedMesh>(null)
  const dummy = useMemo(() => new Object3D(), [])

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      speed: Math.random() * 0.02 + 0.01,
    }))
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        particle.rotation[0] += particle.speed
        particle.rotation[1] += particle.speed * 0.5
        particle.rotation[2] += particle.speed * 0.3

        dummy.position.set(...(particle.position as [number, number, number]))
        dummy.rotation.set(...(particle.rotation as [number, number, number]))
        dummy.updateMatrix()

        meshRef.current!.setMatrixAt(i, dummy.matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <cylinderGeometry args={[0.1, 0.1, 0.05]} />
      <meshStandardMaterial color="#8B0000" />
    </instancedMesh>
  )
}
