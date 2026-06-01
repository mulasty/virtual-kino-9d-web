import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Virtual Kino 9D | Wynajem Wirtualnej Rzeczywistości",
  description:
    "Wynajem mobilnego kina 9D VR 360° na imprezy, wesela, urodziny, festyny i eventy firmowe. Niezapomniane doświadczenie wirtualnej rzeczywistości.",
  keywords: [
    "kino 9D",
    "VR",
    "wirtualna rzeczywistość",
    "wynajem",
    "eventy",
    "imprezy",
    "Łomża",
    "symulator VR",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
