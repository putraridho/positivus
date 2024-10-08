import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="pt-[30px] lg:pt-[60px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
