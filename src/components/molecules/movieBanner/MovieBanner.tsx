import StarRating from '@/components/atoms/starRating/StarRating';
import { Container, Rating } from '@mui/material';
import { MouseEventHandler } from 'react';

interface MovieBannerProps {
  className?: string;
  img?: string;
  title?: string;
  vote_average?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const MovieBanner = ({
  className,
  img,
  title,
  vote_average,
  onClick,
}: MovieBannerProps) => {
  return (
    <Container
      onClick={onClick}
      className={`
        ${className} 
        cursor-pointer
        aspect-16/9 
        scale-95 
        rounded-xl 
        hover:scale-100
        transition 
        duration-300 
        bg-cover 
        drop-shadow-[0_25px_30px_rgba(255,255,255,0.25)]
        hover:z-1
        md:flex
        items-end
        justify-between
        p-2
      `}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <p
        className="lg:text-2xl 
                  font-bold 
                  drop-shadow-[0_0px_3px_rgba(0,0,0,1)] 
                  w-1/2 
                  text-balance"
      >
        {title}
      </p>
      {vote_average && <StarRating voteAvarage={vote_average} />}
    </Container>
  );
};

export default MovieBanner;
