import type { Metadata } from "next";
import { Source_Serif_4, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

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
    <html
      lang="es"
      className={`${sourceSerif.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen bg-[#FAF8F3] font-sans text-slate-950 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Banda de estado de emergencia: contexto real, no decorativo */}
          <div className="bg-[#7A1B2E] text-white">
            <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="font-semibold">Emergencia activa</span>
              <span className="hidden text-white/70 sm:inline">
                Terremoto 7.4 · San José del Palmar, Chocó
              </span>
              <span className="ml-auto font-[family-name:var(--font-mono)] text-[11px] text-white/70">
                Actualizado 13 ago 2026
              </span>
            </div>
          </div>

          <Header />

          {/* Franja tricolor: la firma visual del sitio, proporción real de la bandera */}
          <div className="flex h-1 w-full shrink-0" aria-hidden="true">
            <div className="w-1/2 bg-[#F5C518]" />
            <div className="w-1/4 bg-[#1E3A5F]" />
            <div className="w-1/4 bg-[#7A1B2E]" />
          </div>

          <main className="flex-1">
            <div className="mx-auto">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
