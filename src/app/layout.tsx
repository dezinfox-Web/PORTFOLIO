import type { Metadata } from "next";
import { Inter, Outfit, Monsieur_La_Doulaise, Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/hero/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const signature = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sachin | Cinematic Design Portfolio",
  description: "A premium creative studio experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${signature.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
