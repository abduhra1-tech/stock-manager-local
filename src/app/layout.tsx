import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaunchPad - Launch Your Startup in Days, Not Months",
  description:
    "The all-in-one platform to launch, grow, and scale your startup faster than ever. Join 5,000+ founders building the future.",
  keywords: [
    "startup",
    "saas",
    "launch",
    "growth",
    "platform",
    "business",
    "entrepreneurs",
  ],
  authors: [{ name: "LaunchPad" }],
  openGraph: {
    title: "LaunchPad - Launch Your Startup in Days, Not Months",
    description:
      "The all-in-one platform to launch, grow, and scale your startup faster than ever.",
    type: "website",
    locale: "en_US",
    siteName: "LaunchPad",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchPad - Launch Your Startup in Days, Not Months",
    description:
      "The all-in-one platform to launch, grow, and scale your startup faster than ever.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
