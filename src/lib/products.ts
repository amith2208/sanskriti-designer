export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  // Bangles
  { id: 1, name: "Golden Bangles Set", price: "₹1,800", image: "/logo/logo.jpeg", category: "bangles" },
  { id: 2, name: "Handcrafted Bangles", price: "₹2,200", image: "/logo/logo.jpeg", category: "bangles" },
  { id: 3, name: "Traditional Bangles", price: "₹1,500", image: "/logo/logo.jpeg", category: "bangles" },
  { id: 4, name: "Bridal Bangles", price: "₹3,000", image: "/logo/logo.jpeg", category: "bangles" },
  { id: 5, name: "Temple Bangles", price: "₹2,700", image: "/logo/logo.jpeg", category: "bangles" },

  // Necklace
  { id: 6, name: "Antique Necklace", price: "₹6,500", image: "/logo/logo.jpeg", category: "necklace" },
  { id: 7, name: "Pearl Necklace", price: "₹4,800", image: "/logo/logo.jpeg", category: "necklace" },
  { id: 8, name: "Temple Necklace", price: "₹7,200", image: "/logo/logo.jpeg", category: "necklace" },
  { id: 9, name: "Bridal Necklace", price: "₹12,000", image: "/logo/logo.jpeg", category: "necklace" },

  // Blouse Paintings
  { id: 10, name: "Floral Blouse Painting", price: "₹3,500", image: "/logo/logo.jpeg", category: "blouse-paintings" },
  { id: 11, name: "Peacock Blouse Art", price: "₹4,200", image: "/logo/logo.jpeg", category: "blouse-paintings" },
  { id: 12, name: "Mandala Blouse Design", price: "₹3,800", image: "/logo/logo.jpeg", category: "blouse-paintings" },

  // Saree Paintings
  { id: 13, name: "Hand Painted Silk Saree", price: "₹14,500", image: "/logo/logo.jpeg", category: "saree-paintings" },
  { id: 14, name: "Mysore Silk Painting", price: "₹18,000", image: "/logo/logo.jpeg", category: "saree-paintings" },
  { id: 15, name: "Floral Saree Art", price: "₹12,000", image: "/logo/logo.jpeg", category: "saree-paintings" },

  // Customized Paintings
  { id: 16, name: "Customized Bangles Art", price: "₹2,500", image: "/logo/logo.jpeg", category: "customized-paintings" },
  { id: 17, name: "Name Initial Painting", price: "₹3,000", image: "/logo/logo.jpeg", category: "customized-paintings" },
  { id: 18, name: "Wedding Theme Painting", price: "₹6,000", image: "/logo/logo.jpeg", category: "customized-paintings" },
];
