import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Buttonnew } from ".";
const ServicesCarousel = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Auto-slide every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <div
      id="servicesCarousel"
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {services.map((service, index) => (
          <div
            className="relative w-full flex-shrink-0 flex flex-col md:flex-row items-center
                       bg-darkBg p-8 md:p-16 "
            key={index}
          >
            {/* Image */}
            <img
              src={service.imageSrc}
              alt={service.heading}
              className="w-2/3 h-auto object-cover brightness-50"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
              <h3 className="text-3xl font-semibold text-accent mb-4">
                {service.heading}
              </h3>
              <p className="text-base text-textLight mb-8">
                {service.description}
              </p>

              <Buttonnew
                text={
                  <div>
                    {service.ctaText}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </div>
                }
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8">
        <button
          onClick={goToPreviousSlide}
          aria-label="Previous Slide"
          className="bg-primary hover:bg-accent text-textLight p-2 rounded-full focus:outline-none transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8">
        <button
          onClick={goToNextSlide}
          aria-label="Next Slide"
          className="bg-primary hover:bg-accent text-textLight p-2 rounded-full focus:outline-none transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Slide-down animation keyframes */}
      <style>{`
        @keyframes slideDown {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;
