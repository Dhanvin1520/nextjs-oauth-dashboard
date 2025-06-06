"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { InstancedMesh, Object3D, Shape, ExtrudeGeometry } from "three"

export function PepperoniParticles({ count = 50 }: { count?: number }) {
  const meshRef = useRef<InstancedMesh>(null)
  const dummy = useMemo(() => new Object3D(), [])


  const pizzaSliceGeometry = useMemo(() => {
    const shape = new Shape()
    shape.moveTo(0, 0)
    shape.lineTo(1, 0)
    shape.lineTo(0.5, 1)
    shape.closePath()

    const extrudeSettings = {
      steps: 1,
      depth: 0.05,
      bevelEnabled: false,
    }

    return new ExtrudeGeometry(shape, extrudeSettings)
  }, [])
  const gridSize = 5
  const gridDepth = 2
  const spacing = 8
  
  const particles = useMemo(() => {
    const tempParticles = []
    for (let i = 0; i < count; i++) {
      const xIdx = i % gridSize
      const yIdx = Math.floor(i / gridSize) % gridSize
      const zIdx = Math.floor(i / (gridSize * gridSize)) % gridDepth
  
      const baseX = (xIdx - gridSize / 2) * spacing
      const baseY = (yIdx - gridSize / 2) * spacing
      const baseZ = (zIdx - gridDepth / 2) * spacing
  
      const offset = () => (Math.random() - 0.5) * spacing * 0.5
  
      tempParticles.push({
        position: [baseX + offset(), baseY + offset(), baseZ + offset()],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        speed: Math.random() * 0.02 + 0.01,
        scale: 1 + Math.random() * 1,
      })
    }
    return tempParticles
  }, [count])

  useFrame(() => {
    if (!meshRef.current) return

    particles.forEach((particle, i) => {
      particle.rotation[0] += particle.speed
      particle.rotation[1] += particle.speed * 0.5
      particle.rotation[2] += particle.speed * 0.3

      dummy.position.set(...(particle.position as [number, number, number]))
      dummy.rotation.set(...(particle.rotation as [number, number, number]))
      dummy.scale.setScalar(particle.scale)
      dummy.updateMatrix()

      if (meshRef.current) {
        meshRef.current.setMatrixAt(i, dummy.matrix)
      }
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[pizzaSliceGeometry, undefined, count]}>
      <meshStandardMaterial
        color="#E25822" 
        roughness={0.7}
        metalness={0.1}
      />
    </instancedMesh>
  )
}