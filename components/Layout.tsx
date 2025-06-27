import type React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">{children}</main>
      <footer className="bg-white border-t border-orange-200 p-6 text-center text-gray-600">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Cloud Flex Store. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
  )
}
