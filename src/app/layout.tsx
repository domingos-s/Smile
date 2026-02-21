import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Smile",
  description: "Inventory positives and get support when feeling down.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
