"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export function PizzaSlice() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <coneGeometry args={[1.5, 0.3, 8]} />
      <meshStandardMaterial color="#FFD700" />

      
      <mesh position={[0, 0.16, 0]}>
        <coneGeometry args={[1.4, 0.1, 8]} />
        <meshStandardMaterial color="#FFF8DC" />
      </mesh>

    
      <mesh position={[0.3, 0.22, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>
      <mesh position={[-0.2, 0.22, 0.4]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>
      <mesh position={[0.1, 0.22, -0.3]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>
    </mesh>
  )
}
