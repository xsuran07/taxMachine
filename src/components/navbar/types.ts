import { NavLinkItem } from "../flexibleLink/types";

export interface NavbarProps {
  logo: LogoProps;
  navLinks: NavLinkItem[];
}

export interface LogoProps {
  url: string;
  text: string;
}

export interface MenuItemProps {
  navLinkItem: NavLinkItem;
}
