import { Rating } from '@mui/material';
import React from 'react';

const Card = () => {
  return (
    <div
      className="card 
                cursor-pointer 
                drop-shadow-[0_1px_0px_rgba(255,255,255,1)] 
                h-[400px] w-[280px] 
                group 
                gap-[0.5rem] 
                rounded-[1.5rem] 
                relative 
                flex 
                justify-end 
                flex-col 
                px-2 py-4 
                z-[1] 
                overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280_and_h720_face/1409Us5Om7hk3l6xUmJwNcPadwE.jpg)`,
        }}
        className="absolute top-0 left-0 h-full w-full bg-[#fff8dc] bg-cover"
      />
      <div className="container text-black z-[2] relative flex flex-col gap-[0.5rem]">
        <div className="h-fit w-full">
          <h1
            className="card_heading 
                        text-[1.5rem] 
                        tracking-[.1rem] 
                        drop-shadow-[0_0px_2px_rgba(255,255,255,1)]
                        font-black"
          >
            Star Wars: Episode IV – A New Hope
          </h1>
        </div>

        <div className="flex justify-left items-center h-fit w-full gap-[1.5rem]">
          <div className="w-fit h-fit flex justify-left gap-[0.5rem]">
            <Rating
              className="drop-shadow-[0_1px_0px_rgba(255,255,255,1)]"
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-fit w-fit gap-[0.5rem]">
          <div
            className="bg-white/25 hover:bg-[#222222]
                        border-2 border-[#222222] rounded-[0.5rem] 
                        text-black text-[1rem] font-normal 
                        px-[0.5rem] py-[0.05rem]  
                        hover:text-white 
                        duration-300"
          >
            <p className="drop-shadow-[0_0px_2px_rgba(255,255,255,1)]">Drama</p>
          </div>
          <div
            className="bg-white/25 hover:bg-[#222222]
                        border-2 border-[#222222] rounded-[0.5rem] 
                        text-black text-[1rem] font-normal 
                        px-[0.5rem] py-[0.05rem]  
                        hover:text-white 
                        duration-300"
          >
            <p className="drop-shadow-[0_0px_2px_rgba(255,255,255,1)]">Drama</p>
          </div>
          <div
            className="bg-white/25 hover:bg-[#222222]
                        border-2 border-[#222222] rounded-[0.5rem] 
                        text-black text-[1rem] font-normal 
                        px-[0.5rem] py-[0.05rem]  
                        hover:text-white 
                        duration-300"
          >
            <p className="drop-shadow-[0_0px_2px_rgba(255,255,255,1)]">Drama</p>
          </div>
        </div>
      </div>
      <p
        className="block 
                    text-black font-light 
                    bg-white/15 backdrop-blur-md 
                    rounded-xl 
                    group-hover:p-3 
                    relative 
                    h-[0rem] group-hover:h-[10rem] 
                    leading-[1.2rem] duration-500 
                    overflow-hidden"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
        officiis, dolorem ab animi magnam culpa fugit error voluptates.
      </p>
    </div>
  );
};

export default Card;
