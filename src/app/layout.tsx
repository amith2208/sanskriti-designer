import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFF6E8] text-gray-900 antialiased">
        <Navbar />

        {/* Main content */}
        <main className="min-h-[calc(100vh-120px)]">
          {children}
        </main>

        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
