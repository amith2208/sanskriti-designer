"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

const categories = [
  { key: "bangles", label: "Bangles" },
  { key: "necklace", label: "Necklace" },
  { key: "blouse-paintings", label: "Blouse Paintings" },
  { key: "saree-paintings", label: "Saree Paintings" },
  { key: "customized-paintings", label: "Customized Paintings" },
];

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(categories[0].key);
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    try {
      setLoading(true);

      // Upload ALL images
      const imageUrls = await Promise.all(
        images.map(async (img) => {
          const imgRef = ref(
            storage,
            `products/${category}/${Date.now()}-${img.name}`
          );
          await uploadBytes(imgRef, img);
          return await getDownloadURL(imgRef);
        })
      );

      await addDoc(collection(db, "products"), {
        name,
        price: `₹${price}`,
        category,
        description,
        highlights: highlights
          .split("\n")
          .map((h) => h.trim())
          .filter(Boolean),
        images: imageUrls,       // NEW
        image: imageUrls[0],     // fallback / main
      });

      setName("");
      setPrice("");
      setDescription("");
      setHighlights("");
      setImages([]);
      setSuccess("Product added successfully 🎉");
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      {success && <p className="text-green-600">{success}</p>}

      <input
        className="w-full border px-3 py-2"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* PRICE */}
      <div className="relative">
        <span className="absolute left-3 top-2.5">₹</span>
        <input
          type="number"
          className="w-full border px-7 py-2"
          placeholder="2500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      {/* CATEGORY */}
      <select
        className="w-full border px-3 py-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c.key} value={c.key}>
            {c.label}
          </option>
        ))}
      </select>

      {/* DESCRIPTION */}
      <textarea
        className="w-full border px-3 py-2"
        placeholder="Product description"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* HIGHLIGHTS */}
      <textarea
        className="w-full border px-3 py-2"
        placeholder="Highlights (one per line)"
        rows={3}
        value={highlights}
        onChange={(e) => setHighlights(e.target.value)}
      />

      {/* MULTI IMAGE UPLOAD */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) =>
          setImages(Array.from(e.target.files || []))
        }
        required
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Saving..." : "Add Product"}
      </button>
    </form>
  );
}
