"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImageGallery({
  images,
  fallback,
  name,
}: {
  images?: string[];
  fallback: string;
  name: string;
}) {
  const allImages = images && images.length > 0 ? images : [fallback];
  const [active, setActive] = useState(allImages[0]);

  return (
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div className="relative h-[420px] w-full border rounded bg-white">
        <Image
          src={active}
          alt={name}
          fill
          className="object-contain p-6"
          priority
        />
      </div>

      {/* THUMBNAILS */}
      {allImages.length > 1 && (
        <div className="mt-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(img)}
                className={`relative h-20 w-20 flex-shrink-0 rounded border ${
                  active === img ? "border-black" : "border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${name}-${i}`}
                  fill
                  className="object-contain p-2"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
