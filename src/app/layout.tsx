import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/navbar";
import useRootLayout from "@/hooks/useRootLayout";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "TaxMachine",
  description: "Aplikace na zjednodušení podávání daňového přiznání",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = useRootLayout();

  return (
    <html lang="cs">
      <body>
        <header>
          <Navbar {...config.navbar} />
        </header>
        <main>{children}</main>
        <footer>
          <Footer {...config.footer} />
        </footer>
      </body>
    </html>
  );
}
