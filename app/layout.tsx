import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Acid Soils Dashboard",
  description:
    "Guiding Acid Soil Management Investments in Africa (GAIA) is a research-for-development project led by the International Maize and Wheat Improvement Center (CIMMYT) and supported by the Bill and Melinda Gates Foundation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
