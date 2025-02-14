import type { Metadata } from "next";

import { Lato } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


const aleo = Lato ({
  weight: '400',
  subsets: ['latin'],
})
 
 


export const metadata: Metadata = {
  title: "Opeyemi Salawu Portfolio",
  description: "DIGITAL MARKETER / SOCIAL CONTENT CREATOR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aleo.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
