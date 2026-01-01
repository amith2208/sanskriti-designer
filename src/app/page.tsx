import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/getProducts";

export default async function Home() {
  const products = await getProducts();

  // take first 10 images for showcase
  const showcase = products.slice(0, 10);

  return (
    <>
      {/* HERO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <Image
            src="/logo/logo.jpeg"
            alt="Sanskriti Designer Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-full"
            priority
          />

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Sanskriti <span className="text-yellow-500">Designer</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Handmade fashion ornaments, artistic creations, and traditional
            designs crafted with elegance.
          </p>

          <div className="mt-8">
            <Link
              href="/products"
              className="rounded-md bg-black px-8 py-3 text-white font-medium hover:bg-gray-900 transition"
            >
              View Collection
            </Link>
          </div>
        </div>
      </section>

      {/* AUTO-RUNNING PRODUCT SHOWCASE */}
      {showcase.length > 0 && (
        <section className="overflow-hidden bg-white py-12">
          <div className="flex gap-6 animate-marquee px-6">
            {[...showcase, ...showcase].map((product, i) => (
              <div
                key={i}
                className="relative h-56 w-44 flex-shrink-0 rounded-lg border bg-white"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
