import type { Metadata } from "next";
import PageTab from "@/features/common/PageTab";
import "@/utils/globals.css";

export const metadata: Metadata = {
  title: "宇田知生のホームページ",
  description:
    "宇田知生（うだ ともき）の全てが詰まってるWebサイト。",
  openGraph: {
    title: "宇田知生のホームページ",
    description: "宇田知生（うだ ともき）の全てが詰まってるWebサイト。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        <main>
          <PageTab />
          {children}
        </main>
      </body>
    </html>
  );
}
