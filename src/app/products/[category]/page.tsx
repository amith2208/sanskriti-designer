import { notFound } from "next/navigation";
import { getProducts } from "@/lib/getProducts";
import { CATEGORIES } from "@/lib/categories";
import ProductCard from "@/components/ProductCard";
import ComingSoonLuxury from "@/components/ComingSoonLuxury";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const meta = CATEGORIES.find((c) => c.key === category);
  if (!meta) notFound();

  const products = await getProducts();
  const filtered = products.filter((p) => p.category === category);

  return (
    <main className="min-h-[75vh] bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-12 relative overflow-hidden">

        {/* Category Title */}
        <h1 className="mb-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center sm:text-left">
          {meta.title}
        </h1>

        {/* ================= EMPTY / PRODUCTS ================= */}
        {filtered.length === 0 ? (
          <ComingSoonLuxury />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* ================= CUSTOM ANIMATIONS ================= */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-floatMedium {
          animation: floatMedium 5s ease-in-out infinite;
        }
        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}