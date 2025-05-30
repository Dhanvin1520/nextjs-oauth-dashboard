"use client"

import { Volume2, VolumeX } from "lucide-react"

interface VoiceToggleProps {
  enabled: boolean
  onToggle: (enabled: boolean) => void
  className?: string
}

export function VoiceToggle({ enabled, onToggle, className = "" }: VoiceToggleProps) {
  return (
    <button
      onClick={() => onToggle(!enabled)}
      className={`bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
      title={enabled ? "Mute voice" : "Enable voice"}
    >
      {enabled ? <Volume2 className="w-6 h-6 text-orange-600" /> : <VolumeX className="w-6 h-6 text-gray-400" />}
    </button>
  )
}
