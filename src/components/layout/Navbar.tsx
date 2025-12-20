"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.jpeg"
              alt="Sanskriti Designer Logo"
              width={40}
              height={40}
              className="rounded-full object-contain"
              priority
            />
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-extrabold text-black">
                Sanskriti
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-yellow-500">
                Designer
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-yellow-500">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-yellow-500">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-yellow-500">
              Contact
            </Link>
            <Link
              href="/contact"
              className="ml-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-yellow-500"
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-yellow-500"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-yellow-500"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-black px-4 py-2 text-center text-white hover:bg-gray-900"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
