import { Dispatch, SetStateAction } from 'react';

interface Review {
  id: number;
  title: string;
  reviewCount: number;
}

interface ReviewItemProps {
  review: Review;
  selected: number | null;
  setSelected: (id: number | null) => void;
}

interface RenderReviewsProps {
  reviews: Review[];
  render: (props: ReviewItemProps) => JSX.Element;
  selected: number | null;
  setSelected : Dispatch<SetStateAction<number | null>>
}

function RenderReviews({
  reviews, render, selected, setSelected,
}: RenderReviewsProps) {
  return (
    <ul className="flex flex-col gap-y-2 group">
      {reviews.map((review) => render({ review, selected, setSelected: (id : number | null) => setSelected(id) }))}
    </ul>
  );
}

export default RenderReviews;
