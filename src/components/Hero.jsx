import React, { useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { slides } from '../data/data';

const Hero = () => {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    return (
      <div className='max-w-[1580px] h-[620px] w-full m-auto py-2 px-4 relative group'>
          
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>

        {/* Left Arrow */}

        <div className='hidden group-hover:block active:scale-90 absolute top-[52%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer duration-300'>
          <BsArrowLeftShort onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}

        <div className='hidden group-hover:block active:scale-90 absolute top-[52%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer duration-300'>
          <BsArrowRightShort onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer hover:scale-125'
            >
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Hero
