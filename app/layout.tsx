import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DC68Q2X4FG" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DC68Q2X4FG');
        `}
        </Script>
      </body>
    </html>
  );
}
