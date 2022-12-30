import React, { useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Hero = () => {
  const slides = [
      {
        url: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        url: 'https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1489564239502-7a532064e1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      {
        url: 'https://www.lavozdegalicia.es/default/2019/04/24/00121556124242683572901/Foto/GA17P23F1_184213.jpg',
      },
      {
        url: 'https://s1.eestatic.com/2018/09/24/cocinillas/cocinillas_340480272_116593014_1600x938.jpg',
      },
      {
        url: 'https://images.unsplash.com/photo-1506095619733-3c3ea98fb968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
      
    ]; 

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
