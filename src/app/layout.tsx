import type { Metadata } from "next";
import { Cormorant_Garamond, Overpass } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const overpass = Overpass({
  display: "swap",
  variable: "--font-overpass",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilaria and Stephen",
  description: "20th September 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${overpass.variable} antialiased bg-surface`}
      >
        <div className="h-screen w-screen flex justify-center bg-[url('/flowers.png')] bg-no-repeat bg-[length:250px] sm:bg-contain pt-8 sm:pt-48 bg-left-bottom">
          {children}
        </div>
      </body>
    </html>
  );
}
