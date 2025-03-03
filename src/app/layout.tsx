import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import SWRProvider from "@/components/SWRProvider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kahunas Admin",
  description: "Insights and analytics for Kahunas admins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SWRProvider>
        <body className={`${roboto.className} antialiased`}>{children}</body>
      </SWRProvider>
    </html>
  );
}
