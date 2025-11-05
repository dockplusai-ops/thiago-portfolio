import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Footer from "@/components/ui/Footer";
import ClientConsoleWelcome from "@/components/ui/ClientConsoleWelcome";

export const metadata: Metadata = {
  title: "Thiago do Carmo - Empresário, Tecnologia & Inovação",
  description: "Empresário, líder de tecnologia e inovação. Construindo excelência através de propósito, fé e automação inteligente. 6 empresas ativas nos EUA.",
  keywords: ["Thiago do Carmo", "DockPlus AI", "automação", "IA", "tecnologia", "Cape Cod", "empresário"],
  authors: [{ name: "Thiago do Carmo" }],
  openGraph: {
    title: "Thiago do Carmo - Empresário, Tecnologia & Inovação",
    description: "Empresário, líder de tecnologia e inovação. Construindo excelência através de propósito, fé e automação inteligente.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago do Carmo - Empresário, Tecnologia & Inovação",
    description: "Empresário, líder de tecnologia e inovação. Construindo excelência através de propósito, fé e automação inteligente.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-dark text-light md:cursor-none">
        <ClientConsoleWelcome />
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
