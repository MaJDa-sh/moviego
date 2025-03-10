import StarRating from '@/components/atoms/starRating/StarRating';
import { useGenresStore } from '@/store/useGenresStore';
import { Rating } from '@mui/material';
import { useState, useEffect, useRef, MouseEventHandler } from 'react';

interface MovieCardProps {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const LazyMovieCard = ({
  title,
  overview,
  poster_path,
  vote_average,
  genre_ids,
  onClick,
}: MovieCardProps) => {
  const genres = useGenresStore((state) => state.genres);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      onClick={onClick}
      ref={cardRef}
      className={`card cursor-pointer h-[400px] w-[280px] group gap-[0.5rem] rounded-[1.5rem] relative flex justify-end flex-col px-2 py-4 z-[1] overflow-hidden ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {isVisible && (
        <>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
            }}
            className="absolute top-0 left-0 h-full w-full bg-cover"
          />
          <div className="container text-white z-[2] relative flex flex-col gap-[0.5rem]">
            <div className="h-fit w-full">
              <h1 className="card_heading text-[1.5rem] text-white tracking-[.1rem] drop-shadow-[0_0px_2px_rgba(0,0,0,1)] font-black">
                {title}
              </h1>
            </div>
            <div className="flex justify-left items-center h-fit w-full gap-[1.5rem]">
              <div className="w-fit h-fit flex justify-left gap-[0.5rem]">
                <StarRating voteAvarage={vote_average} />
              </div>
            </div>
            <div className="flex justify-center items-center h-fit w-fit gap-[0.5rem] me-5">
              {genre_ids.map((id, i) => (
                <div
                  key={i}
                  className="bg-white/25 hover:bg-white border-2 border-white rounded-[0.5rem] text-white text-[1rem] font-normal px-[0.5rem] py-[0.05rem] hover:text-white duration-300"
                >
                  <p className="drop-shadow-[0_0px_2px_rgba(0,0,0,1)]">
                    {genres[id]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="block text-white font-light bg-black/15 backdrop-blur-md rounded-xl group-hover:p-3 relative h-[0rem] group-hover:h-[10rem] leading-[1.2rem] duration-500 overflow-hidden">
            {overview}
          </p>
        </>
      )}
    </div>
  );
};

export default LazyMovieCard;
