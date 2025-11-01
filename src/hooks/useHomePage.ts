import { FooterProps } from "@/components/footer/types";
import { NavbarProps } from "@/components/navbar/types";

export interface HomePageProps {
  navbar: NavbarProps;
  footer: FooterProps;
}

export default function useHomePage(): HomePageProps {
  return {
    navbar: {
      logo: {
        url: "/",
        text: "TaxMachine",
      },
      navLinks: [
        {
          label: "Služby",
          url: "/services",
        },
        {
          label: "Náš tým",
          url: "/about",
        },
        {
          label: "Kontakt",
          url: "/contact",
        },
      ],
    },
    footer: {
      documentsTitle: "Dokumenty",
      documents: [
        {
          label: "GDPR",
          url: "/#",
        },
        {
          label: "Smluvní podmínky",
          url: "/#",
        },
        {
          label: "Zásady cookies",
          url: "/#",
        },
      ],
      billingInfoTitle: "Fakturační údaje",
      billingInfo: ["Foo", "IČ: 34364240", "Mostecká 6579", "897 01 Plzeň"],
      contactItemsTitle: "Kontaktní údaje",
      contactItems: [
        {
          label: "support@taxmachine.cz",
          imageSrc: "/icons/mail.svg",
        },
        {
          label: "@taxmachine",
          imageSrc: "/icons/facebook.svg",
          url: "/#",
        },
        {
          label: "@taxmachine",
          imageSrc: "/icons/instagram.svg",
          url: "/#",
        },
      ],
    },
  };
}
