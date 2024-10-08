"use client"
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.png';
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Fitly Logo" width={50} height={30} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link>
            <Link href="#trainers" className="text-gray-300 hover:text-blue-400 transition duration-300">Trainers</Link>
            <Link href="#diet-plans" className="text-gray-300 hover:text-blue-400 transition duration-300">Diet Plans</Link>
            <Link href="#blogs" className="text-gray-300 hover:text-blue-400 transition duration-300">Blogs</Link>
          </nav>

          <Link href="#signup" className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Try Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 py-4">
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link>
              <Link href="#trainers" className="text-gray-300 hover:text-blue-400 transition duration-300">Trainers</Link>
              <Link href="#diet-plans" className="text-gray-300 hover:text-blue-400 transition duration-300">Diet Plans</Link>
              <Link href="#blogs" className="text-gray-300 hover:text-blue-400 transition duration-300">Blogs</Link>
              <Link href="#signup" className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-center">
                Try Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}