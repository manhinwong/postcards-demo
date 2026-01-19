import React from 'react';

const CoverPage = ({ data }) => {
  const coverMessage = data?.coverMessage || "For You";

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 fade-in">
      <div className="max-w-2xl w-full text-center space-y-8 md:space-y-8">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-sepia-dark font-handwritten animate-fade-in-slow mb-6 md:mb-6">
          {coverMessage}
        </h1>

        {/* Decorative divider */}
        <div className="flex justify-center items-center space-x-3 md:space-x-4 py-4 md:py-8 animate-fade-in-delayed-more">
          <div className="w-16 h-0.5 bg-sepia-dark opacity-30"></div>
          <svg className="w-6 h-6 text-warm-orange" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <div className="w-16 h-0.5 bg-sepia-dark opacity-30"></div>
        </div>

        {/* Open indicator */}
        <div className="mt-8 md:mt-16 animate-bounce-gentle">
          <p className="text-lg md:text-2xl text-sepia-dark font-handwritten mb-2 md:mb-4">
            Open →
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
