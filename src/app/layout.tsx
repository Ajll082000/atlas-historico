import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas Histórico",
  description: "Explora países. Entra a su época. Vive su identidad.",
  keywords: ["historia", "atlas", "nicaragua", "mapa interactivo", "historia mundial"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
