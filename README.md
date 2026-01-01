# 🌸 Sanskriti Designer – Handcrafted Fashion & Art

Sanskriti Designer is a handcrafted fashion and art website showcasing traditional and modern creations such as bangles, jewellery, saree paintings, blouse paintings, shirt paintings, handcrafted ornaments, and artistic creations.  
The platform is built with **Next.js (App Router)** and **Tailwind CSS**, focusing on clean design, mobile responsiveness, and WhatsApp-based enquiries.

---

## 🌐 Live Features

- 🛍 Category-wise product listing
- 📱 Mobile-first responsive design
- 🖼 Multiple images per product (gallery + thumbnails)
- 💬 WhatsApp enquiry integration
- 🎞 Auto-scrolling product showcase on Home page
- 📷 Instagram integration
- ⚡ Fast, SEO-friendly Next.js app

---

## 🧱 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Images:** `next/image`
- **State Management:** React Hooks
- **Deployment Ready:** Vercel / Netlify

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── products/
│   │   ├── page.tsx            # All products (category preview)
│   │   └── [category]/
│   │       ├── page.tsx        # Category listing
│   │       └── [id]/
│   │           ├── page.tsx    # Product detail page
│   │           └── ProductImageGallery.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ProductCard.tsx
│   ├── ProductSkeleton.tsx
│   └── StickyWhatsApp.tsx
│
├── lib/
│   ├── getProducts.ts          # Product data source
│   └── categories.ts           # Category metadata
│
├── public/
│   ├── logo/
│   │   └── logo.jpeg
│   ├── whatsapp.svg
│   └── instagram.svg
│
└── styles/
    └── globals.css

## 🌐 Live Website

🔗 **Live Demo:**  
👉 https://sanskriti-designer.vercel.app/

> Click the link to open the live website in a new tab.

---

## 👀 Website Preview

> Static preview of the live site (for quick reference)

![Sanskriti Designer – Home Page Preview](https://sanskriti-designer.vercel.app/og-preview.png)

> ⚠️ Note: GitHub README does not support live embeds.  
> Please use the **Live Demo link** above to explore the full interactive website.