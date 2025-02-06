import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";

export const metadata: Metadata = {
  title: "Raya",
  description: "Simple record web app for my beloved daughter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <main>
          <Hero />
        </main>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
