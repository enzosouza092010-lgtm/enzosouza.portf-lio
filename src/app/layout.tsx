import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Enzo Souza | Portfólio",
  description:
    "Portfólio de Enzo Souza, candidato a Jovem Aprendiz com interesse em Administração, Informática e Tecnologia.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ouro focus:px-4 focus:py-2 focus:text-fundo"
        >
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
