import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";

const kaisei = localFont({
  src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["800", "400"],
  variable: "--font-outfit",
  display: "swap",
});

const paytone = Outfit({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-paytone",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Talmeez Ahmed",
    template: "%s | Talmeez Ahmed",
  },
  description: "Developer, writer, and gamer.",
  openGraph: {
    title: "Talmeez Ahmed",
    description: "Developer, writer, and gamer.",
    siteName: "Talmeez Ahmed",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-textYellow bg-[#0F0D0E]",
        kaisei.variable,
        outfit.variable,
        paytone.variable
      )}
    >
      <body className="min-w-full min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto flex-auto px-4 pt-4 pb-8 md:p-0">
          {children}
        </main>
      </body>
    </html>
  );
}
