import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";

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
    <html data-theme='light' lang='en'>
      <body className={`${inter.className} antialiased`}>
        <main className='text-gray-700 container mx-auto'>{children}</main>
      </body>
    </html>
  );
}
