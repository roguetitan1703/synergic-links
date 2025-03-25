import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServicesCarousel = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? services.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === services.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row items-center bg-dark-layer-1 p-8 md:p-16"
            >
              {/* Left Side - Text Content */}
              <div className="md:w-1/2 md:pr-8 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-dark-text-primary mb-4">
                  {service.heading}
                </h3>
                <p className="text-dark-text-secondary mb-8">
                  {service.description}
                </p>
                <button className="bg-primary hover:bg-primary-light text-dark-text-primary font-semibold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center mx-auto md:mx-0">
                  {service.ctaText}{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              </div>
              {/* Right Side - Image */}
              <div className="md:w-1/2">
                <img
                  src={service.imageSrc}
                  alt={service.heading}
                  className="rounded-md shadow-lg w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8">
        <button
          onClick={goToPreviousSlide}
          className="bg-dark-layer-2 hover:bg-dark-layer-3 text-dark-text-primary p-2 rounded-full focus:outline-none transition-colors duration-200"
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
          className="bg-dark-layer-2 hover:bg-dark-layer-3 text-dark-text-primary p-2 rounded-full focus:outline-none transition-colors duration-200"
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
    </div>
  );
};

export default ServicesCarousel;
