import Image from "next/image";
import { reviewCardProps } from "./types";
import Rating from "./raiting";

export default function ReviewCard(props: reviewCardProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body items-center">
        <div className="flex w-full items-center justify-start gap-6">
          <div className="avatar">
            <div className="w-22 rounded-xl">
              <Image
                src={props.review.avatarImageSrc}
                alt={`Avatar for ${props.review.name}`}
                width={88}
                height={88}
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold">{props.review.name}</h2>
        </div>

        <Rating numberOfStars={props.review.numberOfStars} />

        <p className="text-justify">{props.review.text}</p>
      </div>
    </div>
  );
}
