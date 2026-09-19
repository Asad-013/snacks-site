import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SnacksStation - Fast Food & Snacks Recipe Portal",
    template: "%s | SnacksStation",
  },
  description: "Discover simple, step-by-step fast food, potato snacks, and authentic Deshi recipes you can make at home.",
  keywords: ["recipes", "snacks station", "fast food", "potato snacks", "aloo chop", "deshi recipes", "fried chicken", "french fries", "pizza"],
  authors: [{ name: "SnacksStation Team" }],
  openGraph: {
    title: "SnacksStation - Fast Food & Snacks Recipe Portal",
    description: "Discover simple, step-by-step fast food, potato snacks, and authentic Deshi recipes you can make at home.",
    type: "website",
    locale: "en_US",
    siteName: "SnacksStation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col justify-between">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
