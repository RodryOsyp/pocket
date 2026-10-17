import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Pocket",
  description: "Website for saving bookmarks",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="mx-auto max-w-2xl p-4 antialiased">
        <header className="mb-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Pocket
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}