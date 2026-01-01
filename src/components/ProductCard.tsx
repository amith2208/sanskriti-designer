import Image from "next/image";
import Link from "next/link";

type Props = {
  product: {
    id: string;
    name: string;
    image: string;
    category: string;
  };
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.category}/${product.id}`}
      className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
    >
      {/* Image */}
      <div className="relative h-48 w-full bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2
                     bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {/* Eye Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12z"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>

          <span className="text-sm font-medium text-white">
            Click to view details
          </span>
        </div>
      </div>

      {/* Product Name */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {product.name}
        </h3>
      </div>
    </Link>
  );
}
