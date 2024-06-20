import type { Metadata } from "next";
import BackgroundImage from "./backgroundImage";
import "./globals.css";

export const metadata: Metadata = {
  title: "宇田知生のホームページ",
  description: "宇田知生って誰なの？",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body style={BackgroundImage()}>{children}</body>
    </html>
  );
}
