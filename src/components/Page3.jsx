import React, { useState } from 'react';
import { ScatteredDecorations } from './DecorativeIcons';

const Page3 = ({ data }) => {
  const pageData = data?.page3 || {};
  const memoryTitle = pageData.title || "Remember when...";
  const photos = pageData.memories || [];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const currentPhoto = photos[currentPhotoIndex];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="h-full flex flex-col items-center justify-between py-3 px-3 md:p-12 fade-in relative">
      {/* Decorative background elements */}
      <ScatteredDecorations />

      <div className="w-full flex-1 flex flex-col items-center justify-center space-y-2 md:space-y-4 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sepia-dark text-center font-handwritten">
          {memoryTitle}
        </h1>

        {/* Polaroid Photo Carousel */}
        <div className="flex justify-center flex-1 items-center w-full">
          <div className="relative w-full max-w-md md:max-w-md lg:max-w-lg mx-auto">
            <div className="polaroid-frame transform md:hover:scale-105 transition-transform duration-300">
              {/* Polaroid white border */}
              <div className="bg-white p-3 pb-16 md:p-4 md:pb-24 shadow-2xl transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Photo area */}
                <div className="aspect-[4/5] md:aspect-square w-full bg-sepia-light/30 flex items-center justify-center overflow-hidden relative">
                  {currentPhoto.url ? (
                    currentPhoto.type === "video" ? (
                      <video
                        src={currentPhoto.url}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        muted
                      />
                    ) : (
                      <img
                        src={currentPhoto.url}
                        alt={`Memory ${currentPhotoIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="text-center p-8">
                      <svg
                        className="w-20 h-20 mx-auto text-sepia-dark/30 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sepia-dark/50 font-handwritten text-lg">
                        Add your photo {currentPhotoIndex + 1}
                      </p>
                    </div>
                  )}

                  {/* Navigation arrows for photos */}
                  {photos.length > 1 && (
                    <>
                      <button
                        onClick={prevPhoto}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                        aria-label="Previous photo"
                      >
                        <svg className="w-4 h-4 text-sepia-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextPhoto}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                        aria-label="Next photo"
                      >
                        <svg className="w-4 h-4 text-sepia-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Handwritten caption below photo (on polaroid bottom) */}
                <div className="absolute bottom-0 left-0 right-0 text-center px-3 py-2 md:px-4 md:py-3 flex items-center justify-center h-16 md:h-24">
                  <p className="text-sepia-dark font-handwritten text-lg md:text-2xl lg:text-3xl italic whitespace-normal break-words">
                    {currentPhoto.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Photo indicators */}
            {photos.length > 1 && (
              <div className="flex justify-center space-x-2 mt-4">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className="transition-all duration-300"
                    aria-label={`View photo ${index + 1}`}
                  >
                    <svg
                      className={`w-3 h-3 md:w-4 md:h-4 transition-all duration-300 ${
                        index === currentPhotoIndex
                          ? 'text-warm-orange scale-125'
                          : 'text-sepia/30 hover:text-sepia/50'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center">
          <div className="text-center space-y-1 md:space-y-10">
            <p className="text-xs md:text-base text-sepia font-handwritten opacity-70">
              Until we meet again...
            </p>
            <div className="w-16 md:w-20 h-0.5 bg-sepia-dark opacity-30 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
