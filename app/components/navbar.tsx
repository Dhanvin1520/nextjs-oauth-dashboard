"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export function Navbar() {
  const { data: session } = useSession()

  if (!session) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              🍕 Pizza Dashboard
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/hello" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Hello
              </Link>
              <Link href="/orders" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Orders
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
