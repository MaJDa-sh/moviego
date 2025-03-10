import { Rating } from '@mui/material';

interface StarRatingProps {
  voteAvarage: number;
}

const StarRating = ({ voteAvarage }: StarRatingProps) => {
  return (
    <Rating
      className="drop-shadow-[0_1px_0px_rgba(255,255,255,1)]"
      name="half-rating"
      defaultValue={Math.round(voteAvarage) / 2}
      precision={0.5}
      readOnly
    />
  );
};

export default StarRating;
