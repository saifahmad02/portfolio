import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load the font with specific weights and styles
const montserrat = Montserrat({
  variable: "--font-montserrat", // Define a CSS variable for the font
  subsets: ["latin"], // Specify the subsets you need
  weight: 'variable', // Optional: Specify weights if needed
});

export const metadata: Metadata = {
  title: "Saif Ahmad",
  description: "Saif Ahmads Portfolio Page",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
