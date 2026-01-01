"use client";

import Image from "next/image";

export default function StickyWhatsApp() {
  // ✅ WhatsApp number (India format: country code + number, no + or spaces)
  const phoneNumber = "919900621290";

  const message = encodeURIComponent(
    "Hi, I'm interested in your products from Sanskriti Designer."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Enquiry"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center
                 rounded-full bg-[#25D366] shadow-lg hover:scale-105
                 transition-transform"
    >
      <Image
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
        className="invert"
      />
    </a>
  );
}
