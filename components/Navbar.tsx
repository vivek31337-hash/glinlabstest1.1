'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <Image 
              src="/images/glin-logo.svg" 
              alt="GLIN LABS Logo" 
              width={180} 
              height={40}
              className="h-8 w-auto md:h-10"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Services
            </Link>
            <Link href="/learn" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Learn
            </Link>
            <Link href="/glinai" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              GlinAI
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              Pricing
            </Link>
            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          >
            <span className={`block h-0.5 w-6 bg-gray-700 rounded transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-700 rounded my-1 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-700 rounded transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-300">
              Home
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-300">
              Services
            </Link>
            <Link href="/learn" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-300">
              Learn
            </Link>
            <Link href="/glinai" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-300">
              GlinAI
            </Link>
            <Link href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition duration-300">
              Pricing
            </Link>
            <Link href="/login" className="block px-4 py-2 bg-blue-600 text-white rounded transition duration-300 text-center font-medium">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
