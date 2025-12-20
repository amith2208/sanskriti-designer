"use client";

import { useSearchParams } from "next/navigation";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";

export default function AdminClientPage() {
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");

  if (secret !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-black text-lg">Access denied</p>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-14 space-y-12">
        <AddProductForm />
        <ProductList />
      </div>
    </main>
  );
}
