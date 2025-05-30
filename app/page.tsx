"use client"

import { useSession } from "next-auth/react"
import { LoginForm } from "./components/login-form"
import { PizzaLoader } from "./components/pizza-loader"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { PepperoniParticles } from "./components/pepperoni-particles"

export default function Home() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-64 h-64">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <PizzaLoader />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Environment preset="sunset" />
          </Canvas>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            <PepperoniParticles count={50} />
            <Environment preset="sunset" />
          </Canvas>
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <LoginForm />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-600 mb-4">🍕 Pizza Dashboard</h1>
        <p className="text-xl text-gray-600 mb-8">Welcome to your modern pizza order management system</p>
        <div className="space-x-4">
          <a
            href="/hello"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
          <a
            href="/orders"
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Orders
          </a>
        </div>
      </div>
    </div>
  )
}
