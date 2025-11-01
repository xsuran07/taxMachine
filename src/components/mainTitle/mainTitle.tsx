import { mainTitleProps } from "./types";

export default function MainTitle(props: mainTitleProps) {
  return <h1 className="mb-8 text-center text-5xl">{props.text}</h1>;
}
