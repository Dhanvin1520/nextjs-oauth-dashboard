"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { PizzaSlice } from "../components/pizza-slice"
import { PepperoniParticles } from "../components/pepperoni-particles"
import { VoiceToggle } from "../components/voice-toggle"
import { ProtectedRoute } from "../components/protected-route"

function HelloContent() {
  const { data: session } = useSession()
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const hasGreetedRef = useRef(false)

  useEffect(() => {
    if (
      !session?.user?.name ||
      !voiceEnabled ||
      hasGreetedRef.current || 
      !window.hasOwnProperty("speechSynthesis")
    ) return;

    hasGreetedRef.current = true

    const timeout = setTimeout(() => {
      speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(`Hello, ${session?.user?.name || "Guest"}!`)
      utterance.rate = 0.8
      utterance.pitch = 1.1
      speechSynthesis.speak(utterance)
    }, 300)

    return () => clearTimeout(timeout)
  }, [session, voiceEnabled])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} />
          <PizzaSlice />
          <PepperoniParticles count={30} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Environment preset="sunset" />
        </Canvas>
      </div>

      <VoiceToggle enabled={voiceEnabled} onToggle={setVoiceEnabled} className="absolute top-20 right-4 z-20" />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
          <h1 className="text-6xl font-bold text-orange-600 mb-4">Hello, {session?.user?.name}! 👋</h1>
          <p className="text-xl text-gray-600 mb-8">Welcome to your pizza dashboard</p>
          <div className="flex justify-center space-x-4">
            <a
              href="/orders"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Orders
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HelloPage() {
  return (
    <ProtectedRoute>
      <HelloContent />
    </ProtectedRoute>
  )
}