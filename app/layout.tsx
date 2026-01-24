import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buzz Research - Building the Strangest Consumer Products",
  description: "From prediction markets, to memecoin games, yield instruments, AI chat bots, and beyond. Founded by Malcolm Wyllie and Gavin Anderson.",
  keywords: ["Buzz Research", "consumer products", "prediction markets", "memecoin games", "DeFi", "AI chatbots", "crypto", "Web3"],
  authors: [{ name: "Buzz Research" }],
  creator: "Buzz Research",
  publisher: "Buzz Research",
  openGraph: {
    title: "Buzz Research - Building the Strangest Consumer Products",
    description: "From prediction markets, to memecoin games, yield instruments, AI chat bots, and beyond",
    type: "website",
    locale: "en_US",
    siteName: "Buzz Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzz Research - Building the Strangest Consumer Products",
    description: "From prediction markets, to memecoin games, yield instruments, AI chat bots, and beyond",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

