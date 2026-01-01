import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <Image
          src="/logo/logo.jpeg"
          alt="Sanskriti Designer"
          width={120}
          height={120}
          className="mx-auto mb-6 rounded-full"
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          About Sanskriti Designer
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Sanskriti Designer is a handcrafted fashion and art brand that blends
          tradition with modern elegance. From jewellery and bangles to
          hand-painted sarees, blouses, and artistic creations — every piece is
          thoughtfully designed with love and cultural inspiration.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          We believe handmade art tells a story — and every creation reflects
          passion, patience, and individuality.
        </p>
      </div>
    </main>
  );
}
