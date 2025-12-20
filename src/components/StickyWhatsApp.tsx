"use client";

import Image from "next/image";

export default function StickyWhatsApp() {
  const phoneNumber = "91XXXXXXXXXX"; // replace with real number
  const message = encodeURIComponent(
    "Hi, I'm interested in your products from Sanskriti Designer."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-black px-4 py-3 shadow-lg hover:bg-gray-900 transition"
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={22}
        height={22}
      />
      <span className="hidden sm:inline text-white font-medium">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
