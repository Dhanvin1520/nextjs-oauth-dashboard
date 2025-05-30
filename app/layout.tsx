"use client"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "./providers/auth-provider"
import { Navbar } from "./components/navbar"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pizza Dashboard - Modern Order Management",
  description: "A modern, interactive pizza order dashboard with 3D animations and voice integration",
}


function ChunkErrorHandler() {
  useEffect(() => {
    const handler = (event: ErrorEvent) => {
      if (
        event.message?.includes("Loading chunk") ||
        event?.filename?.includes("/_next/static/chunks/")
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-orange-50 to-red-50 min-h-screen`}>
        <AuthProvider>
          <ChunkErrorHandler />
          <Navbar />
          <main className="pt-16">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
