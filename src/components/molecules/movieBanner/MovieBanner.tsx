import { Container, Rating } from '@mui/material';

interface MovieBannerProps {
  className?: string;
  img: string;
}

const MovieBanner = ({ className, img }: MovieBannerProps) => {
  return (
    <Container
      className={`
        ${className} 
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
                  text-balance "
      >
        Star Wars: Episode IV – A New Hope
      </p>
      <Rating
        className="drop-shadow-[0_1px_0px_rgba(255,255,255,1)]"
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Container>
  );
};

export default MovieBanner;
