import { memo } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingComponent = memo(({ rate } : { rate : number }) => {
  const filledStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(<FaStar key={i} />);
      } else if (i === filledStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  return <div className="text-base font-semibold flex text-primary-clear ">{renderStars()}</div>;
});

export default RatingComponent;
