import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducts } from "@/lib/getProducts";
import { CATEGORIES } from "@/lib/categories";

const WHATSAPP_NUMBER = "919900621290";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  const meta = CATEGORIES.find((c) => c.key === category);
  if (!meta) notFound();

  const products = await getProducts();
  const product = products.find(
    (p) => p.id === id && p.category === category
  );

  if (!product) notFound();

  // ✅ CLEAN WhatsApp message (NO price wording)
  const message = encodeURIComponent(
    `Hi, I am interested in this product:\n\n${product.name}\n\nImage: ${product.image}`
  );

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative h-[420px] border rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-2 text-yellow-600 font-semibold">
              Price on enquiry
            </p>

            {product.description && (
              <p className="mt-4 text-gray-700 leading-relaxed">
                {product.description}
              </p>
            )}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
              target="_blank"
              className="inline-block mt-6 rounded-md bg-[#25D366]
                         px-6 py-3 text-white font-medium
                         hover:scale-105 transition"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
