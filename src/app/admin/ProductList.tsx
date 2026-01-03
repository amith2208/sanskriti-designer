"use client";

import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { db, storage } from "@/lib/firebase";
import { CATEGORIES } from "@/lib/categories";

type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  images?: string[];
  description?: string;
  highlights?: string[];
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const [editData, setEditData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    highlights: "",
    images: [] as string[],
  });

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<Product, "id">),
    }));
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ---------------- START EDIT ---------------- */
  const startEdit = (p: Product) => {
    setEditingId(p.id);
    setNewImages([]);
    setEditData({
      name: p.name,
      price: p.price.replace("₹", ""),
      category: p.category,
      description: p.description || "",
      highlights: (p.highlights || []).join("\n"),
      images: p.images || [p.image],
    });
  };

  /* ---------------- SAVE EDIT ---------------- */
  const saveEdit = async (p: Product) => {
    let finalImages = editData.images;

    if (newImages.length > 0) {
      const uploaded = await Promise.all(
        newImages.map(async (img) => {
          const imgRef = ref(
            storage,
            `products/${editData.category}/${Date.now()}-${img.name}`
          );
          await uploadBytes(imgRef, img);
          return await getDownloadURL(imgRef);
        })
      );
      finalImages = [...editData.images, ...uploaded];
    }

    await updateDoc(doc(db, "products", p.id), {
      name: editData.name,
      price: `₹${editData.price}`,
      category: editData.category,
      description: editData.description,
      highlights: editData.highlights
        .split("\n")
        .map((h) => h.trim())
        .filter(Boolean),
      images: finalImages,
      image: finalImages[0],
    });

    setEditingId(null);
    setNewImages([]);
    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Delete this product permanently?")) return;
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  /* ---------------- IMAGE ACTIONS ---------------- */
  const deleteImage = (index: number) => {
    setEditData({
      ...editData,
      images: editData.images.filter((_, i) => i !== index),
    });
    setPreviewIndex(null);
  };

  const setMainImage = (index: number) => {
    const img = editData.images[index];
    setEditData({
      ...editData,
      images: [img, ...editData.images.filter((_, i) => i !== index)],
    });
    setPreviewIndex(null);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-black mb-6">
        Manage Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border bg-white p-4 space-y-4"
          >
            {/* IMAGES */}
            <div className="flex gap-2 flex-wrap">
              {(editingId === p.id
                ? editData.images
                : p.images || [p.image]
              ).map((img, i) => (
                <button
                  key={i}
                  onClick={() =>
                    editingId === p.id && setPreviewIndex(i)
                  }
                  className="relative h-20 w-20 rounded-lg border overflow-hidden"
                >
                  <Image
                    src={img}
                    alt="product"
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>

            {/* ADD MORE IMAGES */}
            {editingId === p.id && (
              <input
                type="file"
                multiple
                accept="image/*"
                className="text-black"
                onChange={(e) =>
                  setNewImages(Array.from(e.target.files || []))
                }
              />
            )}

            {/* EDIT FORM */}
            {editingId === p.id ? (
              <div className="space-y-2">
                <input
                  className="w-full border px-2 py-1 text-black rounded"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />

                <input
                  type="number"
                  className="w-full border px-2 py-1 text-black rounded"
                  value={editData.price}
                  onChange={(e) =>
                    setEditData({ ...editData, price: e.target.value })
                  }
                />

                <select
                  className="w-full border px-2 py-1 text-black rounded"
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      category: e.target.value,
                    })
                  }
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.title}
                    </option>
                  ))}
                </select>

                <textarea
                  rows={3}
                  className="w-full border px-2 py-1 text-black rounded"
                  placeholder="Description"
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      description: e.target.value,
                    })
                  }
                />

                <textarea
                  rows={3}
                  className="w-full border px-2 py-1 text-black rounded"
                  placeholder="Highlights (one per line)"
                  value={editData.highlights}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      highlights: e.target.value,
                    })
                  }
                />

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => saveEdit(p)}
                    className="bg-black text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-200 text-gray-900 px-4 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="font-semibold text-gray-900">
                  {p.name}
                </p>
                <p className="text-sm text-gray-700">
                  {p.price} · {p.category}
                </p>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => startEdit(p)}
                    className="bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* FULL IMAGE PREVIEW */}
      {previewIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setPreviewIndex(null)}
            className="absolute top-4 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={editData.images[previewIndex]}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 flex gap-4">
            <button
              onClick={() => setMainImage(previewIndex)}
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Set as Main
            </button>
            <button
              onClick={() => deleteImage(previewIndex)}
              className="bg-red-600 text-white px-5 py-2 rounded"
            >
              Delete Image
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
