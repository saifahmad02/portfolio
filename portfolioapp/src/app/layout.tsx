import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Load the font with specific weights and styles
const montserrat = Montserrat({
  variable: "--font-montserrat", // Define a CSS variable for the font
  subsets: ["latin"], // Specify the subsets you need
  weight: 'variable', // Optional: Specify weights if needed
});

export const metadata: Metadata = {
  title: "Saif Ahmad",
  description: "Saif Ahmads Portfolio Page",
  icons:{
    icon:['portfolioapp/src/app/favicon.ico']
  }
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
