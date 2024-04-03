import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja de Roupas",
  description: "Catalogo de Camisetas criada para o teste da AZ Capital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="max-w-5xl m-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
