"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";

const WHATSAPP_NUMBER = "919900621290";

export default function ProductDetailClient({ product }: any) {
  const images = useMemo(() => {
    const list = [
      ...(product.images ?? []),
      ...(product.image ? [product.image] : []),
    ];
    return Array.from(new Set(list)).filter(
      (img) => typeof img === "string" && img.trim().length > 0
    );
  }, [product]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  const message = encodeURIComponent(
    `Hi, I am interested in this product.\n\n` +
    `Product Name: ${product.name}\n\n` +
    `Product Image: ${images[0]}`
  );

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ================= IMAGE SECTION ================= */}
          <div>
            <div className="relative">

              {/* SCROLLABLE IMAGE STRIP */}
              <div
                ref={sliderRef}
                className="
                  flex overflow-x-auto scrollbar-hide
                  snap-x snap-mandatory
                  rounded-2xl
                "
              >
                {images.map((img: string, index: number) => (
                  <div
                    key={index}
                    className="
                      relative flex-shrink-0
                      w-full aspect-square
                      snap-center
                    "
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* ⬅ LEFT ARROW */}
              {images.length > 1 && (
                <span
                  onClick={() => scrollToIndex(0)}
                  className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    text-4xl text-black
                    cursor-pointer select-none
                  "
                >
                  ‹
                </span>
              )}

              {/* ➡ RIGHT ARROW */}
              {images.length > 1 && (
                <span
                  onClick={() => scrollToIndex(images.length - 1)}
                  className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    text-4xl text-black
                    cursor-pointer select-none
                  "
                >
                  ›
                </span>
              )}
            </div>

            {/* THUMBNAILS */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide">
                {images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className="relative h-16 w-16 rounded-lg overflow-hidden border border-gray-300 flex-shrink-0"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumb ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= DETAILS SECTION ================= */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-2 text-yellow-600 font-semibold">
              Price on enquiry
            </p>

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

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-8 rounded-md bg-[#25D366]
                px-8 py-3 text-white font-medium
                hover:scale-105 transition
              "
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
