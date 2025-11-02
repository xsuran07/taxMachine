export interface reviewsProps {
  reviews: reviewData[];
}

export interface reviewCardProps {
  review: reviewData;
}

export interface ratingProps {
  numberOfStars: number;
}

export interface reviewData {
  name: string;
  numberOfStars: number;
  avatarImageSrc: string;
  text: string;
}
