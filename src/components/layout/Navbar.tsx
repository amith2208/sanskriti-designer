"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const productCategories = [
  { name: "All Products", href: "/products" },
  { name: "Bangles", href: "/products/bangles" },
  { name: "Necklaces", href: "/products/necklaces" },
  { name: "Saree Paintings", href: "/products/saree-paintings" },
  { name: "Blouse Paintings", href: "/products/blouse-paintings" },
  { name: "Shirt Paintings", href: "/products/shirt-paintings" },
  { name: "Handcrafted Ornaments", href: "/products/handcrafted-ornaments" },
  { name: "Artistic Creations", href: "/products/artistic-creations" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.jpeg"
              alt="Sanskriti Designer Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-black">
                Sanskriti
              </span>
              <span className="text-lg font-extrabold text-yellow-500">
                Designer
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-yellow-500">
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-yellow-500">
                Products
              </button>

              <div className="absolute left-0 top-full h-2 w-full" />

              <div
                className="absolute left-0 top-full w-56 rounded-md border bg-white shadow-lg
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           transition-opacity duration-200"
              >
                {productCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-yellow-500">
              About
            </Link>

            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-yellow-500">
              Contact
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sanskriti__designer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-80 hover:opacity-100 transition"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" onClick={() => setOpen(false)} className="block">
              Home
            </Link>

            <p className="font-semibold text-gray-500">Products</p>
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={() => setOpen(false)}
                className="block pl-4"
              >
                {cat.name}
              </Link>
            ))}

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            {/* Instagram Mobile */}
            <a
              href="https://www.instagram.com/sanskriti__designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
