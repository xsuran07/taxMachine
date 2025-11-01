import Image from "next/image";
import { contactItemProps } from "./types";

export default function ContactItem(props: contactItemProps) {
  const item = (
    <div className="flex items-center gap-1">
      <Image
        src={props.contactItem.imageSrc}
        alt={props.contactItem.label}
        width={30}
        height={30}
      />
      <div>{props.contactItem.label}</div>
    </div>
  );

  return props.contactItem.url !== undefined ? (
    <a href={props.contactItem.url} className="link link-hover">
      {item}
    </a>
  ) : (
    item
  );
}
