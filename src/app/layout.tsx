import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Van Sluijs Bouw & Techniek",
  description:
    "Degelijk gebouwd. Vakkundig verbouwd. Complete verbouwingen in Zeeland — van badkamer tot aanbouw.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${archivo.variable} ${sourceSans3.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
