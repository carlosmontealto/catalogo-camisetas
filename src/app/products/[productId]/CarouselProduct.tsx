"use client";

import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import { useState } from "react";

type Props = {
  image_url: [string];
};

const CarouselProduct = ({ image_url }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? image_url.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLasttSlide = currentIndex === image_url.length - 1;
    const newIndex = isLasttSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-96 h-96 w-full relative group pb-4">
      <div
        style={{ backgroundImage: `url(${image_url[currentIndex]})` }}
        className="w-full h-full rounded-lg bg-center bg-cover duration-500 shadow-md"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={20} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowRight onClick={nextSlide} size={20} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {image_url.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={
              slideIndex === currentIndex
                ? " cursor-pointer text-purple-700"
                : " cursor-pointer"
            }
          >
            <Dot size={40} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselProduct;
