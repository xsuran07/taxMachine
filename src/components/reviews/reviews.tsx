import ReviewCard from "./reviewCard";
import { reviewsProps } from "./types";

export default function Reviews(props: reviewsProps) {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-4">
      {props.reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}
