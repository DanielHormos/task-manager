import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/ui/navbar";

import { roboto } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Task manager",
  description: "Next js application - Hackweek project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  antialiased`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
