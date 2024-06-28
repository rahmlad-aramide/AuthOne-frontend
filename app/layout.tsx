import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { gilroy } from "./fonts";

export const metadata: Metadata = {
  title: "AuthOne",
  description: "Experience authentications designed to be secure, quick and smooth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} bg-dark text-white`}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
