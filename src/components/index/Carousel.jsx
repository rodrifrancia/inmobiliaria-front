import React from 'react';
import img1 from "../../img/casa1.jpg"
import img2 from "../../img/correo.png"
import img3 from "../../img/advertencia.png"

const images = [
  img1,
  img2,
  img3
]
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const previousImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
        onClick={previousImage}
      >
        Previous
      </button>
      <img
        className={`flex w-96 h-96 mx-auto transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        src={images[currentImageIndex]}
        alt="Carousel Image"
        onTransitionEnd={handleTransitionEnd}
      />
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
        onClick={nextImage}
      >
        Next
      </button>
      <div className="flex justify-center mt-4">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            className={`w-12 h-12 mx-2 cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
            src={imageUrl}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;