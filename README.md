# 🌸 Sanskriti Designer

**Handmade fashion, traditional art & customized elegance.**

Sanskriti Designer is a modern, full-stack web application built to showcase and manage handmade fashion products such as bangles, necklaces, blouse paintings, saree paintings, and customized artwork. 

The application features a sleek public storefront for customers and a powerful, secret-access admin panel for content management—all powered by **Next.js 14**, **Firebase**, and **Vercel**.

---

## 🚀 Live Demo

*   **🌐 Public Storefront:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
*   **🔐 Admin Panel:** Accessible via `/admin?secret=YOUR_SECRET`

---

## ✨ Features

### 🛍️ Customer Experience
- **Fully Responsive UI:** Optimized for mobile, tablets, and large monitors.
- **Category Browsing:** Easy navigation through different handmade collections.
- **Rich Product Pages:** 
    - Multiple image gallery with interactive thumbnails.
    - Detailed descriptions and bulleted highlights.
    - **WhatsApp Enquiry:** Direct "Chat with us" integration on every product.
- **Optimized Performance:** Fast-loading images using the `next/image` component.

### 🧑‍💻 Admin Panel (Management)
- **Product Control:** Add, edit, or delete products in real-time.
- **Advanced Image Management:**
    - Multi-image uploads via Firebase Storage.
    - **Set Main Image:** Choose which photo appears as the primary thumbnail.
    - **Dynamic Gallery:** Append new images to existing products or delete individual ones.
- **Security:** Secret-based route protection for administrative tasks.

---

## 🧱 Tech Stack

Layer	Technology
Frontend	Next.js 14 (App Router)
Styling	Tailwind CSS
Database	Firebase Firestore
Storage	Firebase Storage
Language	TypeScript
Deployment	Vercel

📁 Project Structure
src/
├── app/
│   ├── admin/                # Admin dashboard management
│   ├── products/
│   │   └── [category]/
│   │       └── [id]/         # Dynamic product detail page
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── StickyWhatsApp.tsx    # Global floating contact button
├── lib/
│   ├── firebase.ts           # Firebase SDK initialization
│   └── getProducts.ts        # Data fetching logic
public/
    ├── logo/                 # Store logos
    └── whatsapp.svg          # Social assets

⚙️ Environment Variables
Create a .env.local file in your root directory and add your Firebase credentials:
env

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Admin Access Secret
NEXT_PUBLIC_ADMIN_SECRET=your-chosen-secret-string
Use code with caution.

⚠️ Note: Do not commit .env.local to version control. Ensure these variables are added to your Vercel Project Settings.
🧪 Local Development
Install Dependencies:
bash
npm install
Use code with caution.

Start Development Server:
bash
npm run dev
Use code with caution.

Open http://localhost:3000 to view the site.
Access Admin:
Navigate to http://localhost:3000/admin?secret=your-chosen-secret-string
🚀 Deployment (Vercel)
Push your code to a GitHub repository.
Import the project into Vercel.
Configure the next.config.js to allow Firebase Storage images:
javascript
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
Use code with caution.

🔮 Future Enhancements
Auth: Upgrade to Firebase Authentication for admin login.
SEO: Implement dynamic Meta tags and OpenGraph images for social sharing.
Analytics: Integrate Google Analytics to track product views.
UI: Add drag-and-drop image reordering in the admin panel.
🙌 Credits
Built with ❤️ using:
Next.js
Firebase
Tailwind CSS
Vercel
{content: }



