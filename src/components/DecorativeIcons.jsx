import React from 'react';

// Coffee Cup SVG - Hand-drawn style
export const CoffeeIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

// Heart SVG - Hand-drawn style
export const HeartIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={color}
    stroke={color}
    strokeWidth="1"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Star SVG - Hand-drawn style
export const StarIcon = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Sparkle SVG - Decorative
export const SparkleIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

// Decorative container component for scattered icons
export const ScatteredDecorations = ({ children }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {/* Top left coffee */}
      <div className="absolute top-8 left-8 text-warm-orange transform -rotate-12 animate-float">
        <CoffeeIcon className="w-10 h-10 md:w-12 md:h-12" />
      </div>

      {/* Top right star */}
      <div className="absolute top-12 right-16 text-sepia transform rotate-12 animate-float-delayed">
        <StarIcon className="w-8 h-8 md:w-10 md:h-10" />
      </div>

      {/* Bottom left heart */}
      <div className="absolute bottom-16 left-12 text-warm-orange transform rotate-6 animate-float-slow">
        <HeartIcon className="w-10 h-10 md:w-12 md:h-12" />
      </div>

      {/* Bottom right sparkle */}
      <div className="absolute bottom-12 right-12 text-sepia transform -rotate-6 animate-float">
        <SparkleIcon className="w-7 h-7 md:w-9 md:h-9" />
      </div>

      {/* Middle left small star */}
      <div className="absolute top-1/2 left-20 text-sepia-dark opacity-40 transform -rotate-12 animate-float-delayed">
        <StarIcon className="w-6 h-6" />
      </div>

      {/* Middle right small heart */}
      <div className="absolute top-1/3 right-20 text-warm-orange opacity-40 transform rotate-12 animate-float-slow">
        <HeartIcon className="w-6 h-6" />
      </div>
    </div>
  );
};
