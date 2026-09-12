import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "@/components/Providers";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Bach — AI Content Creator | Prompt Engineer | AI Video Creative";
const description =
  "Creative portfolio of Bach, an AI Content Creator and Prompt Engineer specializing in AI-assisted visual creation, video production, character development, storytelling, and creative experimentation.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your domain (e.g. https://bach.example.com) when you deploy.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  authors: [{ name: "Lê Minh Bách" }],
  keywords: [
    "AI Content Creator",
    "Prompt Engineer",
    "AI Video",
    "AI image generation",
    "Character design",
    "Visual storytelling",
    "Video editing",
    "YouTube content",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Bach — Creative Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bach — From ideas to visuals" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1A26",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
