import { NavLinkItem } from "../flexibleLink/types";

export interface FooterProps {
  documentsTitle: string;
  documents: NavLinkItem[];
  billingInfoTitle: string;
  billingInfo: string[];
  contactItemsTitle: string;
  contactItems: contactItem[];
}

export interface contactItem {
  label: string;
  imageSrc: string;
  url?: string;
}

export interface contactItemProps {
  contactItem: contactItem;
}
