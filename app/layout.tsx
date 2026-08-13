import type { Metadata } from "next";
import "./globals.css";

import {Header} from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ayuda Colombia",
    template: "%s | Ayuda Colombia",
  },
  description:
    "Encuentra recursos, elementos esenciales y puntos de ayuda para situaciones de emergencia en Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}