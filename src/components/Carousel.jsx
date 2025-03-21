import { useState, useEffect, useRef } from "preact/hooks";

import carousel1 from "../assets/carousel/1.webp";
import carousel2 from "../assets/carousel/2.webp";
import carousel3 from "../assets/carousel/3.webp";
import carousel4 from "../assets/carousel/4.webp";
import carousel5 from "../assets/carousel/5.webp";

export function Carousel() {
  // Array of image paths - replace with your actual image paths
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  // Function to start/reset the timer
  const startTimer = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start a new interval
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  // Start timer on component mount
  useEffect(() => {
    startTimer();

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle navigation with timer reset
  const navigateImage = (direction) => {
    // Reset the timer
    startTimer();

    // Update image index
    setCurrentImageIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % images.length;
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel image ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${
              index === currentImageIndex
                ? "translate-x-0"
                : index < currentImageIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => navigateImage("prev")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-10"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={() => navigateImage("next")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-10"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10" aria-label="Carousel navigation">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              // Reset timer and set specific index
              startTimer();
              setCurrentImageIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${currentImageIndex}`}
          />
        ))}
      </div>
    </div>
  );
}
