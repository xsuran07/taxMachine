import { NavbarProps } from "@/components/navbar/types";

export interface HomePageProps {
  navbar: NavbarProps;
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
  };
}
