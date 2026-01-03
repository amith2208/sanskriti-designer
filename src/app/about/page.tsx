import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-[#FFFFFF]">
      <div className="relative mx-auto max-w-4xl px-6 py-12 text-center">

        {/* Soft floating background accents */}
        <div className="absolute -top-12 -left-12 h-36 w-36 rounded-full bg-yellow-200/30 blur-2xl animate-pulse" />
        <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-pink-200/30 blur-2xl animate-pulse" />

        {/* Card */}
        <div className="relative rounded-3xl bg-white/75 backdrop-blur-md shadow-xl px-8 py-12">

          {/* Logo */}
          <Image
            src="/logo/logo.jpeg"
            alt="Sanskriti Designer"
            width={110}
            height={110}
            className="mx-auto mb-6 rounded-full shadow"
          />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            About Sanskriti Designer
          </h1>

          {/* Content – UNCHANGED */}
          <p className="mt-6 text-gray-700 leading-relaxed">
            Sanskriti Designer is a handcrafted fashion and art brand that blends
            tradition with modern elegance. From jewellery and bangles to
            hand-painted sarees, blouses, and artistic creations — every piece is
            thoughtfully designed with love and cultural inspiration.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            We believe handmade art tells a story — and every creation reflects
            passion, patience, and individuality.
          </p>

          {/* Soft divider */}
          <div className="mt-8 h-[1px] w-24 mx-auto bg-yellow-400/60 rounded" />
        </div>
      </div>
    </main>
  );
}
