import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxMachine",
  description: "Aplikace na zjednodušení podávání daňového přiznání",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
