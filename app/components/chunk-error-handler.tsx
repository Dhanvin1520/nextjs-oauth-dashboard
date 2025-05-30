
"use client"

import { useEffect } from "react"

export function ChunkErrorHandler() {
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      if (
        event.message?.includes("Loading chunk") ||
        event.filename?.includes("/_next/static/chunks/")
      ) {
        console.warn("Chunk load failed. Reloading page...")
        window.location.reload()
      }
    }

    window.addEventListener("error", handler)

    return () => {
      window.removeEventListener("error", handler)
    }
  }, [])

  return null
}
