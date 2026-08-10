import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shortterm-app.com"),
  title: {
    default: "ShortTerm · Estancias cortas. Historias largas.",
    template: "%s",
  },
  description:
    "ShortTerm conecta a quienes tienen una habitación para una estadía corta con quienes la están buscando. Publicá, chateá y coordiná directo.",
  openGraph: {
    siteName: "ShortTerm",
    locale: "es_ES",
    images: ["/isotipo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/isotipo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
