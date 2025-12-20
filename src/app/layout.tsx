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
      <body className="min-h-screen flex flex-col antialiased bg-white">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <StickyWhatsApp />

      </body>
    </html>
  );
}
