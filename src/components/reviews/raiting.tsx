import { ratingProps } from "./types";

export default function Rating(props: ratingProps) {
  return (
    <div className="rating rating-half rating-md">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`mask mask-star bg-orange-400 ${index % 2 === 0 ? "mask-half-1" : "mask-half-2"}`}
          aria-label={`${index + 1} half-star`}
          aria-current={index + 1 === props.numberOfStars ? "true" : undefined}
        ></div>
      ))}
    </div>
  );
}
