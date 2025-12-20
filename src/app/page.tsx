import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col items-center text-center">

            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/logo/logo.jpeg"
                alt="Sanskriti Designer Logo"
                width={120}
                height={120}
                className="rounded-full object-contain"
                priority
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-black">
              Sanskriti{" "}
              <span className="text-yellow-500">Designer</span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 max-w-xl sm:max-w-2xl text-sm sm:text-base text-gray-600">
              Handmade fashion, custom saree painting, and elegant jewellery
              crafted with tradition and love.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition"
              >
                View Collection
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-black px-6 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* BALANCING SECTION (OPTION 1 FIX) */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Explore our handcrafted collections and custom designs made with
            passion and tradition.
          </p>
        </div>
      </section>
    </>
  );
}
