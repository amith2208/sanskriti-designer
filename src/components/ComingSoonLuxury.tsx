"use client";

import Image from "next/image";

export default function ComingSoonSection() {
  return (
    <section
      className="
        min-h-[calc(100vh-72px)]
        flex items-center justify-center
        bg-[#FFFfff]
        px-4
        pt-4
      "
    >
      <div
        className="
          w-full max-w-6xl
          rounded-3xl
          bg-gradient-to-b from-[#1c1c1c] to-[#0f0f0f]
          shadow-2xl
          px-6 py-6
          flex flex-col justify-between
        "
      >
        {/* BRAND */}
        <div className="text-center -mt-2">
          <h1 className="text-3xl md:text-4xl tracking-widest text-white">
            Sanskriti Designer
          </h1>
          {/* <p className="mt-1 text-sm tracking-[0.3em] text-yellow-400">
            HANDCRAFTED LUXURY
          </p> */}
        </div>

        {/* IMAGES */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["/coming/1.png", "/coming/2.png", "/coming/3.png", "/coming/4.png"].map(
            (src, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Craft ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
            )
          )}
        </div>

        {/* TEXT */}
        <div className="text-center mt-6">
          <h2 className="text-4xl md:text-5xl font-serif text-white italic">
            Coming Soon
          </h2>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Every piece begins as a feeling ✨
            <br />
            Shaped by hands, finished by love 🤍
            <br />
            Crafted slow. Worn forever 💫
            <br />
            <span className="text-yellow-400 font-medium">
              Magic loading…
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
