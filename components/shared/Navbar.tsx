"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">Google</div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="text-pink-500 font-semibold ">
            Home
          </Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Resources</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-lg shadow-md transition">
            Schedule A Meeting →
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-700 text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
}
