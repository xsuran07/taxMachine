import Link from "next/link";
import { FlexibleLinkProps } from "./types";

export default function FlexibleLink(props: FlexibleLinkProps) {
  return (
    <Link className="flex h-full items-center" href={props.navLinkItem.url}>
      {props.navLinkItem.label}
    </Link>
  );
}
