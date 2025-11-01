import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";
import useHomePage from "@/hooks/useHomePage";

export const metadata: Metadata = {
  title: "TaxMachine",
  description: "Aplikace na zjednodušení podávání daňového přiznání",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = useHomePage();

  return (
    <html lang="cs">
      <body>
        <header>
          <Navbar {...config.navbar} />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
