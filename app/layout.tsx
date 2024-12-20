import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Check Serasa - Sua vida financeira em dia",
  description: "Verifique seu score e melhore",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Check Serasa - Sua vida financeira em dia",
    description: "Verifique seu score e melhore",
    url: "https://checkserasa.online",
    siteName: "Check Serasa",
    images: [
      { url: "/favicon.ico" },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
