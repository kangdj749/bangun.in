import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "PT Bangun Cipta Solusi",
  description: "Konsultan Arsitektur, Engineering & Konstruksi Terintegrasi",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-gray-900 bg-white">
       <ThemeProvider>
        <Navbar />
        <main className="pt-20">{children}</main> {/* pt-20 supaya nggak tertutup navbar fixed */}
        <Footer />
       </ThemeProvider> 
      </body>
    </html>
  );
}
