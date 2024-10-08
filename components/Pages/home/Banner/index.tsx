"use client";
import React, { useState, useEffect } from "react";

const Banner = () => {
  // Handle previous and next button clicks
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [images, setImages] = useState<{ title: string; url: string }[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images from the API
  useEffect(() => {
    async function fetchImages() {
      try {
        // const response = await axios.get('https://api.example.com/images'); // Replace with your API URL
        const response = {
          data: [
            {
              url: "https://luxecars.co.in/wp-content/uploads/2023/03/DSC06925-scaled.jpg",
              title: "Car",
            },
            {
              url: "https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg",
              title: "Car",
            },
            {
              url: "https://luxecars.co.in/wp-content/uploads/2023/03/DSC06925-scaled.jpg",
              title: "Car",
            },
          ],
        };
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  return (
  
      <div className="h-1/5 relative overflow-hidden">
        {" "}
        {images.length > 0 ? (
          <>
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="object-fill  w-full h-full"
            />
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
              &#10095;
            </button>
          </>
        ) : (
          <p className="text-center">Loading images...</p>
        )}
      </div>

     
    
  );
};

export default Banner;
