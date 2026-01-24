import type { Metadata } from "next";
import "app/globals.css";

export const metadata: Metadata = {
  title: "Buzz Research - Building the Strangest Consumer Products",
  description: "From prediction markets, to memecoin games, yield instruments, AI chat bots, and beyond",
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

