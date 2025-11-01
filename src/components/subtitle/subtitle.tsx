import { subtitleProps } from "./types";

export default function Subtitle(props: subtitleProps) {
  return <h2 className="mb-8 text-center text-3xl">{props.text}</h2>;
}
