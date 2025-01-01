import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Tabs from "@/components/mobile/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterComponents/Footer";

// Uncomment if you want to use Roboto font
// const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "OneLine: Online Shopping Sri Lanka | Mobile, Beauty, Appliances, Fashion",
  description: "Largest online shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" /> 
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        <Tabs/>
      </body>
    </html>
  );
}
