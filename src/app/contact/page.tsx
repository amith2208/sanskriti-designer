import Image from "next/image";

const WHATSAPP_NUMBER = "919900621290";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Get in Touch
        </h1>

        <p className="mt-4 text-gray-600">
          For enquiries, custom designs, or collaborations — reach out anytime.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#25D366] px-6 py-3 text-white font-medium hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sanskriti__designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-900 px-6 py-3 font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Visit Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
