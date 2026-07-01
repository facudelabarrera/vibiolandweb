import type { Metadata, Viewport } from "next";
import { Mulish, STIX_Two_Text } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const stix = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Vibioland — Comunidades con naturaleza",
  description:
    "Diseñamos comunidades en entornos rurales donde vivir mejor es posible. Coliving, cohousing y covivienda en contacto con la naturaleza.",
  openGraph: {
    title: "Vibioland — Comunidades con naturaleza",
    description:
      "Diseñamos comunidades en entornos rurales donde vivir mejor es posible.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${mulish.variable} ${stix.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </body>
    </html>
  );
}
