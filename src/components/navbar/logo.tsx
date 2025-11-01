import Link from "next/link";
import { LogoProps } from "./types";
import Image from "next/image";

export default function Logo(props: LogoProps) {
  return (
    <Link href={props.url} className="flex h-full items-center justify-center">
      <Image src="/images/logo.png" alt="logo" width={50} height={60} />
      {props.text}
    </Link>
  );
}
