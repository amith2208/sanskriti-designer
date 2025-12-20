# 🌸 Sanskriti Designer

**Sanskriti Designer** is a modern, full-stack web application built to showcase and manage handmade fashion products such as **bangles, necklaces, blouse paintings, saree paintings, and customized artwork**.

The application features a **public storefront** for customers and a **powerful admin panel** for managing products, images, and content — all backed by **Firebase** and deployed on **Vercel**.

---

## 🚀 Live Website

🌐 **Live URL:**  
https://your-vercel-url.vercel.app

🔐 **Admin Panel (Secret Access):**  


---

## ✨ Features

### 🛍️ Customer-Facing Features

- Fully responsive UI (mobile, laptop, large monitors)
- Product browsing by category
- Product details page with:
  - Multiple image gallery with thumbnails
  - Product description
  - Bullet highlights
  - WhatsApp enquiry CTA
- Sticky WhatsApp button on all pages
- Optimized images using `next/image`

---

### 🧑‍💻 Admin Panel Features

- Add new products
- Edit existing products:
  - Name
  - Price (₹ auto-handled)
  - Category
  - Description
  - Highlights
- Upload multiple images per product
- Add more images to existing products
- Delete individual images
- Set any image as the main image
- Delete products
- Secret-based admin access (no login UI for now)

---

## 🧱 Tech Stack

| Layer       | Technology                    |
|-------------|--------------------------------|
| Frontend    | Next.js 14 (App Router)        |
| Styling     | Tailwind CSS                  |
| Backend     | Firebase Firestore            |
| Storage     | Firebase Storage              |
| Language    | TypeScript                    |
| Deployment  | Vercel                        |

---

## 📁 Project Structure

src/
├── app/
│ ├── admin/ # Admin dashboard
│ ├── products/
│ │ └── [category]/
│ │ └── [id]/ # Product detail page
│ ├── layout.tsx
│ └── page.tsx
│
├── components/
│ └── StickyWhatsApp.tsx
│
├── lib/
│ ├── firebase.ts
│ └── getProducts.ts
│
public/
│ ├── logo/
│ └── whatsapp.svg


---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=xxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxx

# Admin Secret
NEXT_PUBLIC_ADMIN_SECRET=your-secret-value


⚠️ Important Notes

Do NOT commit .env.local to GitHub

Add the same variables in
Vercel → Project Settings → Environment Variables

🧪 Local Development
1️⃣ Install dependencies
npm install

2️⃣ Run the development server
npm run dev

Open in browser:
http://localhost:3000

🔐 Admin Access

Admin access is intentionally not public.

Use:
/admin?secret=YOUR_SECRET

Why this approach?

Avoids authentication complexity in early stages

Simple and lightweight

Can be upgraded later to Firebase Authentication

🖼️ Image Management

Images are uploaded to Firebase Storage

Image URLs are stored in Firestore

Supports:

Multiple images per product

Appending new images

Deleting images

Setting a main image

Optimized public gallery display

🚀 Deployment (Vercel)
Steps

Push code to GitHub

Import repository into Vercel

Add environment variables

Deploy

Required Next.js Image Configuration

Ensure next.config.js contains:
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

module.exports = nextConfig;
🛡️ Security Notes

Admin route protected using a secret query parameter

Firebase rules should restrict write access

Recommended for production scale:

Firebase Authentication

Role-based admin access

Firestore security rules

🔮 Future Enhancements

Firebase Authentication for admin

Drag & drop image reordering

Delete images directly from Firebase Storage

SEO optimization (meta tags, OG images)

Google Analytics integration

Order / enquiry tracking

Custom domain setup

🎨 Brand

Sanskriti Designer
Handmade fashion, traditional art & customized elegance.

🙌 Credits

Built with ❤️ using:

Next.js

Firebase

Tailwind CSS

Vercel
