"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "919900621290";

export default function ProductDetailClient({ product }: any) {
  // ✅ Clean & safe image list
  const images = useMemo(() => {
    const list = [
      ...(product.images ?? []),
      ...(product.image ? [product.image] : []),
    ];
    return Array.from(new Set(list)).filter(
      (img) => typeof img === "string" && img.trim().length > 0
    );
  }, [product]);

  const [activeImage, setActiveImage] = useState(images[0]);

  const message = encodeURIComponent("Hi, I am interested.");

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ================= IMAGE SECTION ================= */}
          <div>
            {/* Main Image */}
            <div className="relative h-[420px] w-full rounded-lg border bg-white">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className="object-contain p-6"
                priority
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-20 w-20 rounded border flex-shrink-0
                      ${
                        activeImage === img
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= DETAILS SECTION ================= */}
          <div>
            {/* Name */}
            <h1 className="text-3xl font-extrabold text-gray-900">
              {product.name}
            </h1>

            {/* Price text */}
            <p className="mt-2 text-yellow-600 font-semibold">
              Price on enquiry
            </p>

            {/* Description */}
            {product.description && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Highlights */}
            {product.highlights?.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Highlights
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {product.highlights.map((h: string, i: number) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-md bg-[#25D366]
                         px-8 py-3 text-white font-medium
                         hover:scale-105 transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
