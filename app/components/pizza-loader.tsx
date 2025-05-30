"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export function PizzaLoader() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02
      meshRef.current.rotation.x += 0.01
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[2, 2, 0.3, 32]} />
        <meshStandardMaterial color="#DEB887" />

        
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[1.9, 1.9, 0.1, 32]} />
          <meshStandardMaterial color="#FFF8DC" />
        </mesh>

       
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 1.2
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius

          return (
            <mesh key={i} position={[x, 0.22, z]}>
              <cylinderGeometry args={[0.2, 0.2, 0.05]} />
              <meshStandardMaterial color="#8B0000" />
            </mesh>
          )
        })}
      </mesh>
    </group>
  )
}
