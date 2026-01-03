const WHATSAPP_NUMBER = "919731669871";

export default function ContactPage() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-[#FFFFFF]">
      <div className="relative mx-auto max-w-4xl px-6 py-12 text-center">

        {/* Soft floating background accents */}
        <div className="absolute -top-12 -left-12 h-36 w-36 rounded-full bg-green-200/30 blur-2xl animate-pulse" />
        <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-pink-200/30 blur-2xl animate-pulse" />

        {/* Card */}
        <div className="relative rounded-3xl bg-white/75 backdrop-blur-md shadow-xl px-8 py-12">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Get in Touch
          </h1>

          {/* Content – UNCHANGED */}
          <p className="mt-4 text-gray-700">
            For enquiries, custom designs, or collaborations — reach out anytime.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full bg-[#25D366] px-10 py-3
                text-white font-medium shadow-lg
                hover:scale-105 transition
              "
            >
              Chat on WhatsApp
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sanskriti__designer/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full border border-gray-900 px-10 py-3
                font-medium text-gray-900
                hover:bg-gray-900 hover:text-white transition
              "
            >
              Visit Instagram
            </a>
          </div>

          {/* Soft divider */}
          <div className="mt-10 h-[1px] w-24 mx-auto bg-yellow-400/60 rounded" />
        </div>
      </div>
    </main>
  );
}
