"use client";

import { usePathname } from "next/navigation";
import { MenuItemProps } from "./types";
import FlexibleLink from "../flexibleLink/flexibleLink";

export default function MenuItem(props: MenuItemProps) {
  const pathname = usePathname();

  return (
    <li
      className={`${pathname === props.navLinkItem.url && "underline underline-offset-5"}`}
    >
      <FlexibleLink navLinkItem={props.navLinkItem} />
    </li>
  );
}
