import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bheberlyn O. Eugenio | Software Project Manager",
    template: "%s | Bheberlyn O. Eugenio",
  },
  description:
    "Portfolio of Bheberlyn O. Eugenio — Software Project Manager with 20+ systems delivered across web, mobile, automation, and enterprise software.",
  metadataBase: new URL("https://portfolio-bheb.vercel.app"),
  openGraph: {
    title: "Bheberlyn O. Eugenio | Software Project Manager",
    description:
      "Software Project Manager portfolio — 20+ systems delivered across web, mobile, automation, and enterprise platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <div className="page-bg flex min-h-screen flex-col">
          <Navbar />
          <main className="relative z-10 flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
