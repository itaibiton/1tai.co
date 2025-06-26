import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1tai.co - Professional Web Development & Digital Services",
  description: "Expert web development, social media management, marketing, and video editing services by Itai Biton.",
  icons: {
    icon: "/1tai-logo/Logo/PNGs/favicon-light.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/1tai-logo/Logo/PNGs/favicon-light.ico" />
      </head>
      <body className={inter.className + " min-h-screen "}>
        {children}
      </body>
    </html>
  );
}
