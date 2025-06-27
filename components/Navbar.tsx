"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-[#f8f8f5] fixed top-0 left-0 right-0 z-50 p-4 shadow-md border-b border-orange-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/products"
          className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
        >
          Cloud Flex Store
        </Link>
        {/* Hamburger for mobile/tablet */}
        <button
          className="lg:hidden flex items-center px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Desktop nav links */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link
              href="/products"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/deals"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Deals
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile/Tablet slide-in menu (from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f8f8f5] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="flex items-center justify-end p-4 border-b border-orange-200">
          
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link href="/products" className="block text-gray-800 hover:text-orange-600 font-medium px-2 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/categories" className="block text-gray-800 hover:text-orange-600 font-medium px-2 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              Categories
            </Link>
          </li>
          <li>
            <Link href="/deals" className="block text-gray-800 hover:text-orange-600 font-medium px-2 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              Deals
            </Link>
          </li>
          <li>
            <Link href="/about" className="block text-gray-800 hover:text-orange-600 font-medium px-2 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block text-gray-800 hover:text-orange-600 font-medium px-2 py-2 rounded-md" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Overlay for menu (lighter color) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[#f8f8f5] opacity-50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
    </nav>
  )
}
