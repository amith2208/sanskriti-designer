"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  images?: string[];
  fallback: string;
  name: string;
};

export default function ProductImageGallery({
  images = [],
  fallback,
  name,
}: Props) {
  const allImages = images.length ? images : [fallback];
  const [index, setIndex] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [showZoom, setShowZoom] = useState(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  const activeImage = allImages[index];

  /* ---------- ZOOM POSITION ---------- */
  const updateZoom = (clientX: number, clientY: number) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    setZoomPos({
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    });
  };

  /* ---------- SWIPE ---------- */
  const startSwipe = (x: number) => (startX.current = x);
  const endSwipe = (x: number) => {
    if (startX.current === null) return;
    const diff = startX.current - x;
    if (diff > 60 && index < allImages.length - 1) setIndex(i => i + 1);
    if (diff < -60 && index > 0) setIndex(i => i - 1);
    startX.current = null;
  };

  return (
    <div className="w-full">
      <div className="relative flex gap-6">
        {/* ================= MAIN IMAGE ================= */}
        <div
          ref={imageRef}
          className="relative h-[340px] w-full overflow-hidden rounded-xl"
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={(e) => updateZoom(e.clientX, e.clientY)}
          onTouchStart={(e) => startSwipe(e.touches[0].clientX)}
          onTouchEnd={(e) => endSwipe(e.changedTouches[0].clientX)}
          onTouchMove={(e) =>
            updateZoom(e.touches[0].clientX, e.touches[0].clientY)
          }
        >
          <Image
            src={activeImage}
            alt={name}
            fill
            draggable={false}
            className="object-contain select-none"
          />

          {/* ⬅ LEFT ARROW (NO SPACE, NO BG) */}
          {index > 0 && (
            <span
              onClick={() => setIndex(index - 1)}
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                text-4xl font-light text-black
                cursor-pointer select-none
              "
            >
              ‹
            </span>
          )}

          {/* ➡ RIGHT ARROW (NO SPACE, NO BG) */}
          {index < allImages.length - 1 && (
            <span
              onClick={() => setIndex(index + 1)}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                text-4xl font-light text-black
                cursor-pointer select-none
              "
            >
              ›
            </span>
          )}
        </div>

        {/* ================= ZOOM PANEL ================= */}
        {showZoom && (
          <div
            className="hidden md:block h-[340px] w-[340px] rounded-xl"
            style={{
              backgroundImage: `url(${activeImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200%",
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            }}
          />
        )}
      </div>

      {/* ================= THUMBNAILS ================= */}
      {allImages.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {allImages.map((img, i) => (
            <button
              key={img}
              onClick={() => setIndex(i)}
              className={`relative h-14 w-14 rounded-lg ${
                i === index ? "ring-2 ring-black" : ""
              }`}
            >
              <Image
                src={img}
                alt={`${name}-${i}`}
                fill
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
