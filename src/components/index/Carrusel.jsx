import React from 'react';


const Carrusel = ({fotos}) => {

  const [img1,img2] = fotos
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const previousImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? fotos.length - 1 : prevIndex - 1));
    }
  };

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => (prevIndex === fotos.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white font bold text-2xl px-4 py-2 rounded-full"
        onClick={previousImage}
      >
        &lt;
      </button>
      <img
        className={`flex w-full h-96 mx-auto transition-opacity duration-150 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
        src={fotos[currentImageIndex]}
        alt="Carousel Image"
        onTransitionEnd={handleTransitionEnd}
      />
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white font bold text-2xl px-4 py-2 rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
      <div className="flex justify-center mt-4">
        {fotos.map((imageUrl, index) => (
          <img
            key={index}
            className={`w-20 h-20 mx-2 cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
            src={imageUrl}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Carrusel;


