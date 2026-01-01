const WHATSAPP_NUMBER = "919900621290";

export default function ContactPage() {
  return (
    <section className="bg-white min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Get in Touch
        </h1>

        <p className="mt-4 text-gray-600">
          For enquiries, custom designs, or collaborations — reach out anytime.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#25D366] px-8 py-3 text-white font-medium shadow
                       hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>

          <a
            href="https://www.instagram.com/sanskriti__designer/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-900 px-8 py-3
                       font-medium text-gray-900
                       hover:bg-gray-900 hover:text-white transition"
          >
            Visit Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
